import { Component, Input, OnInit } from '@angular/core';
import { OrderInfo } from 'src/api-module/Modules/OrderInfo';
import { IOrdersService } from 'src/app/Services/OrdersService';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {


  @Input()
  item! : OrderInfo

  statusString! : string;


  constructor(private orderService : IOrdersService) { }

  ngOnInit(): void {
    this.statusString = this.orderService.GetStatusInfo(this.item.madePercent).statusString;
  }

}
