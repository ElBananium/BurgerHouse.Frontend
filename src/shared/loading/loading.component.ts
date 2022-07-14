import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shared-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  encapsulation!: ViewEncapsulation.None

  @Input()
  fill! : string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
