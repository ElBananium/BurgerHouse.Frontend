import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/api-module/Modules/Item';

@Component({
  selector: 'item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {

  @Output()
  closeModalEvent  = new EventEmitter<void>()

  @Input()
  item! : Item


  constructor() { }

  ngOnInit(): void {
    
  }

  BackgroundClicked()
  {
    this.closeModalEvent.emit();
  }



}
