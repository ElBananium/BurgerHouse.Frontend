import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketItem, IBasketStateService } from 'src/app/Services/BasketStateService';
import { IOrdersService } from 'src/app/Services/OrdersService';

@Component({
  selector: 'basket-page-main',
  templateUrl: './basket-page-main.component.html',
  styleUrls: ['./basket-page-main.component.css']
})
export class BasketPageMainComponent implements OnInit {

  items! : BasketItem[];

  isItemEmpty = true;


  resultPrice = 0;
  constructor(private basketService : IBasketStateService, private ordersService : IOrdersService, private router : Router) { }

  ngOnInit(): void {
  }
  ngDoCheck()
  {
    this.items = this.basketService.GetItems();

    this.isItemEmpty = this.items.length ==0;

    this.resultPrice = 0;
    this.items.forEach(x =>this.resultPrice+= x.item.price * x.count)

  }

  DoOrder()
  {
    if(this.items.length ==0) return;

    this.router.navigateByUrl("/sendOrder");
  }

}
