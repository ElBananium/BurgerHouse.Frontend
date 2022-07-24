import { Component, Input, OnInit } from '@angular/core';
import { BasketItem, IBasketStateService } from 'src/app/Services/BasketStateService';

@Component({
  selector: 'basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketPageBasketItemComponent implements OnInit {

  @Input()
  item! : BasketItem


  constructor(private basketState : IBasketStateService) { }

  ngOnInit(): void {

  }



}
