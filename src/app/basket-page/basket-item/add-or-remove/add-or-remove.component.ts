import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/api-module/Modules/Item';
import { IBasketStateService } from 'src/app/Services/BasketStateService';

@Component({
  selector: 'basket-page-add-or-remove',
  templateUrl: './add-or-remove.component.html',
  styleUrls: ['./add-or-remove.component.css']
})
export class AddOrRemoveComponent implements OnInit {

  @Input()
  item! : Item;

  @Input()
  itemCount! : number;

  constructor(private basketService : IBasketStateService) { }

  ngOnInit(): void {
  }

  ngDoCheck()
  {
    
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
