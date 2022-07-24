import { Component, OnInit } from '@angular/core';
import { IBasketStateService } from 'src/app/Services/BasketStateService';

@Component({
  selector: 'basket-link',
  templateUrl: './basket-link.component.html',
  styleUrls: ['./basket-link.component.css']
})
export class BasketLinkComponent implements OnInit {

  count = 0;

  isBasketEmpty = true;

  constructor(private basketState : IBasketStateService) { }

  ngOnInit(): void {
  }
  ngDoCheck()
  {
    this.count  = this.basketState.GetItems().length;


    this.isBasketEmpty = this.count == 0;
  }

}
