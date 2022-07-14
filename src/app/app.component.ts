import { Component } from '@angular/core';
import { ILoadingStateService } from './Services/LoadingStateService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BurgerHouse';

  isLoading = false;

  constructor(private loadingService : ILoadingStateService){}

  ngDoCheck()
  {
    this.isLoading = this.loadingService.IsLoading()
  }
}
