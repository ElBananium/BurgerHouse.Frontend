import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBasketStateService } from '../Services/BasketStateService';
import { ILoadingStateService } from '../Services/LoadingStateService';
import { IOrdersService } from '../Services/OrdersService';

@Component({
  selector: 'app-send-order-page',
  templateUrl: './send-order-page.component.html',
  styleUrls: ['./send-order-page.component.css']
})
export class SendOrderPageComponent implements OnInit {

  constructor(private orderService : IOrdersService, private basketService : IBasketStateService, private loadingService : ILoadingStateService, private router : Router) { }

  ngOnInit(): void {

    let items = this.basketService.GetItems();
    this.basketService.DropBasket();

    this.loadingService.StartLoading();
    this.orderService.SendOrder(items).then(id =>{
      this.loadingService.StopLoading();

      this.router.navigateByUrl("/order/"+id);

    }).catch(() =>
    {
      this.router.navigateByUrl("/");
    });
    
  }

}
