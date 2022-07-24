import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostBinding, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputBoxState } from 'src/api-module/Modules/NonApi/InputBoxEventArgs';
import { IAuthService } from 'src/app/Services/AuthService';
import { ILoadingStateService } from 'src/app/Services/LoadingStateService';
import { BoxInputComponent } from '../box-input/box-input.component';


@Component({
  selector: 'auth-page-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.css'],
  animations : [
    trigger('okBox', [
      state("inhitial", style({ transform : "translateY(-100%)", visibility : "hidden" })),
      state("open", style( { transform : "translateY(0)"})),
      transition('inhitial <=> open', animate('200ms linear')),
    ])
  ]
})
export class InputPhoneComponent implements OnInit {

  @Output()
  CodeSended = new EventEmitter<void>();

  preLoadBoxes! : Array<InputBoxState>

  okBoxState = "inhitial";

  state! : string;

  isSendButtonDisabled = false;

  

  constructor(private authService : IAuthService, private loadingState : ILoadingStateService) { }

  ngOnInit(): void {

    if(this.authService.IsHavePhoneNumber())
    {
      this.preLoadBoxes = new Array<InputBoxState>();

      let phonenumber = this.authService.GetPhoneNumber();

      let info = phonenumber.slice(1,phonenumber.length);


      let index = 1;
      for(let l of info)
      {
        this.preLoadBoxes.push(new InputBoxState(index, Number.parseInt(l)));
        index++;
      }


    }
    
  }

  OnAllFilled(arg : string)
  {
    this.state = arg;

    this.okBoxState = "open";


  }

  OnNotAllFilled()
  {
    this.okBoxState = "inhitial";

  }

  SendPhone()
  {
    this.authService.SetPhoneNumber("8"+this.state);

    this.isSendButtonDisabled = true;
    this.loadingState.StartLoading();
    this.authService.RequestLoginCode().then(() =>{
      this.loadingState.StopLoading();
      this.CodeSended.emit();
      
    });
  }


}
