import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAuthService } from 'src/app/Services/AuthService';
import { ILoadingStateService } from 'src/app/Services/LoadingStateService';

@Component({
  selector: 'auth-page-input-code',
  templateUrl: './input-code.component.html',
  styleUrls: ['./input-code.component.css']
})
export class InputCodeComponent implements OnInit {


  @Output()

  Authorized = new EventEmitter<void>()

  constructor(private authService : IAuthService, private loadingState : ILoadingStateService) { }

  ngOnInit(): void {
  }


  OnAllFilled(data : string)
  {
    if(this.loadingState.IsLoading()) return;
    this.loadingState.StartLoading()
    this.authService.LoginWithCode(data).then(() =>
    {
      this.loadingState.StopLoading();

      this.Authorized.emit();


    }).catch(() =>{
      this.loadingState.StopLoading();
    });

  }

  OnNotAllFilled()
  {

  }

}
