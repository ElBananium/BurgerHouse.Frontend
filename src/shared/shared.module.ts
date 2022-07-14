import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollEndDirective } from './Directives/scroll-end.directive';
import { LoadingComponent } from './loading/loading.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';



@NgModule({
  declarations: [
    ScrollEndDirective,LoadingComponent,LoadingBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ScrollEndDirective,LoadingComponent,LoadingBarComponent]
})
export class SharedModule { }
