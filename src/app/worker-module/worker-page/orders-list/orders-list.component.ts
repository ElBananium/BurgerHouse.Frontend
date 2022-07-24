import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderInfo } from 'src/api-module/Modules/OrderInfo';
import { IOrderListService } from '../../Services/OrderListService';
import { interval, Observable, of, Subject, Subscription, timer } from 'rxjs';

import { takeWhile,startWith} from 'rxjs/operators'

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  ordersList! : Array<OrderInfo>

  isLoaded = false;

  updateSubscription! : Subscription;


  constructor(private orderListService : IOrderListService ) { }
  

  async UpdateOrderList() : Promise<void>
  {

    let value = await this.orderListService.GetOrders();


    
    this.ordersList = value;

    


    
  }

  

  ngOnDestroy(): void {

    this.updateSubscription.unsubscribe();
   
    
  }

  async ngOnInit(): Promise<void> {



    if(this.orderListService.IsHaveCash())
    {
      this.ordersList = this.orderListService.GetCashedOrders();
      


      
    }else
    {
      await this.UpdateOrderList();
    }

    if(!this.orderListService.IsItemsLoaded())
    {
      await this.orderListService.LoadItems();
    }


    this.isLoaded = true;

  this.updateSubscription = interval(5000).pipe(startWith(0)).subscribe(() => this.UpdateOrderList());

    
    




    
  }



}
