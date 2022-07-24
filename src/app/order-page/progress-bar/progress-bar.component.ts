import { Component, Input, OnInit } from '@angular/core';
import { IOrdersService, OrderStatus } from 'src/app/Services/OrdersService';

@Component({
  selector: 'order-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input()
  madePercent! : number;

  statusList! : Array<OrderStatus>;

  workWeight! : number;

  maxWeight! : number;

  workLineWidth! : number;

  constructor(private orderService : IOrdersService) { }

  ngOnInit(): void {

    this.statusList = this.orderService.GetStatuses().filter(x => x.breakPoint >= 0);

    this.workWeight = this.orderService.GetStatusInfo(this.madePercent).weight;


    let position = 0;
    for(const [index,i] of this.statusList.entries())
    {
      if(i.weight == this.workWeight) position = index;

    }
    this.workLineWidth =( (position) *100)/ (this.statusList.length-1) ;

    
    this.maxWeight = 0;
    for(let i of this.statusList)
    {
      if(i.weight > this.maxWeight) this.maxWeight = i.weight;
    }

    
  }

}
