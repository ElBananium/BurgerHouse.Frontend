import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[ScrollEnd]'
})
export class ScrollEndDirective {


  scrollTimeout! : any;


  @Output("ScrollEnd")
  intEvent : EventEmitter<void> = new EventEmitter();


  constructor(private element : ElementRef) {


   }


  @HostListener("scroll")

  ScrollEnded(arg : any)
  {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => this.intEvent.emit(), 100)
  }
}
