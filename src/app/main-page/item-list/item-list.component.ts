import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/api-module/Modules/Item';
import { IShopStateService } from 'src/app/Services/ShopStateService';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items! : Array<Item>

  constructor(private shopStateService : IShopStateService) { }

  ngOnInit(): void {
  }
  ngDoCheck() : void
  {
    this.items = this.shopStateService.GetCurrentItemList();
  }

}
