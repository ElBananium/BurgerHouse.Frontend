import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/api-module/Modules/Item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item! : Item

  isOpenModal = false;

  CardClicked()
  {
    this.isOpenModal = true;

  }

  CloseModal()
  {
    this.isOpenModal = false;
  }

  constructor() { }

  ngOnInit(): void {
    
    
  }


}
