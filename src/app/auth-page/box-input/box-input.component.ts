import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { InputBoxState } from 'src/api-module/Modules/NonApi/InputBoxEventArgs';

@Component({
  selector: 'auth-page-box-input',
  templateUrl: './box-input.component.html',
  styleUrls: ['./box-input.component.css']
})
export class BoxInputComponent implements OnInit {

  @Input()
  id! : number

  @Input()
  data! : number

  @Input()
  focusBoxEvent! : Observable<number>;

  @Input()
  blurBoxEvent! : Observable<number>;

  @Output()
  DataFilled = new EventEmitter<InputBoxState>()


  @Output()
  BackSpacePressed = new EventEmitter<number>();

  @Output()
  LeftArrowPressed = new EventEmitter<number>();

  @Output()
  RightArrowPressed = new EventEmitter<number>();

  @ViewChild("input")
  inputel! : ElementRef
  
  
  
  constructor() { }

  ngOnInit(): void {



    

    this.focusBoxEvent.subscribe(value => 
    {
      if(value == this.id) this.Focus();
    }
    
    
    )

    this.blurBoxEvent.subscribe(value => 
      {
        if(value == this.id) this.Blur();
      })
  }

  ngAfterViewInit(){

    if(this.data >= 0) this.inputel.nativeElement.value = this.data; 

    
  }

  OnKeyPressed(event : any)
  {

    event.preventDefault();

    let value = event.key;

    let regex = /[0-9]|\./;
    if(!regex.test(value)) return;

     event.target.value = value;

     this.DataFilled.emit(new InputBoxState(this.id,Number.parseInt(value)));
    

  }

  OnBackSpacePressed(event : any){
    event.preventDefault();

    event.target.value = "";

    this.BackSpacePressed.emit(this.id);
    

  }

  OnLeftArrowPressed(event : any)
  {
    event.preventDefault();


    this.LeftArrowPressed.emit(this.id);
  }

  OnRightArrowPressed(event : any)
  {
    event.preventDefault(this.id);

    this.RightArrowPressed.emit(this.id); 
  }

  Focus()
  {
    this.inputel.nativeElement.focus();
  }

  Blur()
  {
    this.inputel.nativeElement.blur();
  }

}
