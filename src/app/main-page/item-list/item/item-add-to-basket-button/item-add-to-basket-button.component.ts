import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/api-module/Modules/Item';
import { IBasketStateService } from 'src/app/Services/BasketStateService';

@Component({
  selector: 'item-add-to-basket-button',
  templateUrl: './item-add-to-basket-button.component.html',
  styleUrls: ['./item-add-to-basket-button.component.css']
})
export class ItemAddToBasketButtonComponent implements OnInit {

  constructor(private basketService : IBasketStateService ) { }

  @Input()
  item! :Item;


  isAddedToBasket = false;

  itemCount = 0;

  ngOnInit(): void {
  }

  ngDoCheck()
  {
    this.isAddedToBasket = this.basketService.IsItemInBasket(this.item.Id);
    if(this.basketService.IsItemInBasket(this.item.Id))
    {
      this.itemCount = this.basketService.GetItem(this.item.Id).count;
    }
    
  }

  AddToBasket($event : any)
  {
    $event.stopPropagation();
    this.basketService.AddItem(this.item);

    

  }
  RemoveFrombasket($event : any)
  {
    $event.stopPropagation();
    this.basketService.RemoveItem(this.item);
  }

}
