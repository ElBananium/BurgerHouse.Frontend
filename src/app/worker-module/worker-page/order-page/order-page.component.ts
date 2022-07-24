import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/api-module/Modules/Item';
import { OrderInfo } from 'src/api-module/Modules/OrderInfo';
import { ILoadingStateService, LoadingStateService } from 'src/app/Services/LoadingStateService';
import { IOrdersService, OrderStatus } from 'src/app/Services/OrdersService';
import { IOrderListService } from '../../Services/OrderListService';
import { IWorkerService } from '../../Services/WorkerService';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  order! : OrderInfo;

  orderedItems! : Array<Item>;


  statuses! : Array<OrderStatus>;

  workStatus! : OrderStatus;

  constructor(private workerService : IWorkerService, private loadingService : ILoadingStateService, private orderList : IOrderListService, private orderService : IOrdersService, private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(x =>
      {
        if(isNaN(x.id))  this.router.navigateByUrl("/worker");

        
        if(!this.orderList.IsHaveCash()) this.router.navigateByUrl("/worker"); 

        let order = this.orderList.GetCashedOrders().find(z => z.id == x.id);


        if(order != undefined) 
        {
          this.order = order;
        
        }
        else
        {
          this.router.navigateByUrl("/worker"); 
        }

        

        if(!this.orderList.IsItemsLoaded())  this.router.navigateByUrl("/worker"); 

        this.orderedItems = this.orderList.GetItems().filter(x => this.order.orderedItems.findIndex(z => z.itemId == x.Id) != -1);
        
        

        this.statuses = this.orderService.GetStatuses();

        this.workStatus = this.orderService.GetStatusInfo(this.order.madePercent);

      });
  }

  SetStatus(percent : number)
  {
    this.loadingService.StartLoading();

    this.workerService.SetPercent(this.order.id, percent).then(() => 
    {
      this.loadingService.StopLoading();
      this.router.navigateByUrl("/worker");
    });
  }

  CloseOrder()
  {
    this.loadingService.StartLoading();

    this.workerService.CloseOrder(this.order.id).then(() => 
    {
      this.orderList.ClearCash();
      this.loadingService.StopLoading();
      this.router.navigateByUrl("/worker");
    });
  }

}
