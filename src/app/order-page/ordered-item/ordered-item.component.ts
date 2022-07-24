import { Component, Input, OnInit } from '@angular/core';
import { BasketItem } from 'src/app/Services/BasketStateService';

@Component({
  selector: 'ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.css']
})
export class OrderedItemComponent implements OnInit {

  @Input()
  item! : BasketItem


  constructor() { }

  ngOnInit(): void {

  }
}
