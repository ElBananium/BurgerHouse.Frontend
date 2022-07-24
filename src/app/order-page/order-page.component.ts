import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/api-module/Modules/Item';
import { OrderInfo } from 'src/api-module/Modules/OrderInfo';
import { BasketItem } from '../Services/BasketStateService';
import { ICategoriesService } from '../Services/CategoriesService';
import { IOrdersService } from '../Services/OrdersService';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(public actRoute : ActivatedRoute, public router : Router, private orderService : IOrdersService, private categoriesService : ICategoriesService) { }

  isLoaded = false;

  order! : OrderInfo 

  items! : Array<BasketItem>;

  statusString! : string;

  ngOnInit(): void {
    this.actRoute.params.subscribe( async x =>
      {
        let id = Number.parseInt(x.id);

        if(isNaN(id)) this.router.navigateByUrl("/");

        this.order = await this.orderService.GetOrder(id);
        



        this.items = new Array<BasketItem>();
        for(let item of this.order.orderedItems)
        {
          let additem = await this.categoriesService.GetItem(item.itemId);
          this.items.push(new BasketItem(additem, item.count));
          

        }

        this.statusString = this.orderService.GetStatusInfo(this.order.madePercent).statusString;

        this.isLoaded=true;
        
      });
  }

}
