import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from 'src/api-module/Modules/Item';
import { IShopStateService } from 'src/app/Services/ShopStateService';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items! : Array<Item>

  @Input()
  dataLoaded! : Observable<void>

  falseItems : Array<Item>

  isDataLoaded = false;

  constructor(private shopStateService : IShopStateService) 
  {
    this.falseItems = new Array<Item>();

    for(let i = 0; i < 20; i++)
    {
      this.falseItems.push(new Item(1,1,"АФыллдаыц", "asf;alsfa;lsfl;asf;lasl;f", 1256, ""))
    }
   }

  ngOnInit(): void {

    this.dataLoaded.subscribe(() =>
    {
      this.isDataLoaded = true;
      this.ngDoCheck();
    })
  }
  ngDoCheck() : void
  {
    this.items = this.shopStateService.GetCurrentItemList();
  }


}
