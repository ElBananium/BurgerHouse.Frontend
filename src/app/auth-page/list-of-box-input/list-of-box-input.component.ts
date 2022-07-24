import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoxState } from 'src/api-module/Modules/NonApi/InputBoxEventArgs';
@Component({
  selector: 'auth-page-list-of-box-input',
  templateUrl: './list-of-box-input.component.html',
  styleUrls: ['./list-of-box-input.component.css']
})
export class ListOfBoxInputComponent implements OnInit, OnDestroy {

  @Input()
  countOfBox! : number;

  @Input()
  preLoadedInfo! : Array<InputBoxState>

  @Output()
  AllFilled = new EventEmitter<string>()

  @Output()
  NotAllFilled = new EventEmitter<void>();

  inputState = new Array<InputBoxState>();

  focusSubject: Subject<number> = new Subject<number>();

  blurSubject : Subject<number> = new Subject<number>();


  constructor() { }
  ngOnDestroy(): void {
    this.focusSubject.complete();
    this.blurSubject.complete();
  }

  ngOnInit(): void {

    if(this.preLoadedInfo)
    {
      this.initPreLoadedInfo();
    }
    else
    {
      this.initCountOfBox();
    }
    
  }

  ngAfterViewInit()
  {
    setTimeout(() => this.isAllFilledCheck(), 100);
  }

  initCountOfBox()
  {
    for(let i = 1; i<=this.countOfBox; i++)
    {
      this.inputState.push(new InputBoxState(i,-1));
    }
  }
  initPreLoadedInfo()
  {
    
    this.inputState = this.preLoadedInfo;
    
  }

  isAllFilledCheck()
  {
    let isAllFilled = true;
    for(let input of this.inputState)
    {
      if(input.content == -1) isAllFilled = false;
    }


    if(isAllFilled) this.OnAllFilled();

    if(!isAllFilled) this.OnNotAllFilled();

    
  }


  OnAllFilled()
  {
    let result = "";

    for(let input of this.inputState)
    {
      result+=input.content.toString();
    }
    this.AllFilled.emit(result);
  }

  OnNotAllFilled()
  {
    this.NotAllFilled.emit();
  }
  OnDataFilled(args : InputBoxState)
  {
    let box = this.inputState.find(x => x.boxId == args.boxId);
    
    if(box == undefined) throw new Error("Input box not founded");
    
    box.content = args.content;


    this.BlurInputById(box.boxId);
    this.FocusInputById(box.boxId+1)
    
    this.isAllFilledCheck();
    
  }

  OnBackSpacePressed(id : number)
  {
    let box = this.inputState.find(x => x.boxId == id);
    if(box == undefined) throw new Error("Input box not founded");


    box.content = -1;

    this.BlurInputById(box.boxId);

    this.FocusInputById(box.boxId-1);

    this.isAllFilledCheck();
  }


  OnRightArrowPressed(id : number)
  {
    this.BlurInputById(id);
    this.FocusInputById(id+1);
  }

  OnLeftArrowPressed(id : number)
  {

    this.BlurInputById(id);
    this.FocusInputById(id-1);
  }
  FocusInputById(id : number)
  {
    this.focusSubject.next(id);
  }

  BlurInputById(id : number)
  {
    this.blurSubject.next(id);
  }



}
