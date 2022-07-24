import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageMainComponent } from './basket-page-main/basket-page-main.component';
import { BasketPageBasketItemComponent } from './basket-item/basket-item.component';
import { AppComponent } from '../app.component';
import { AddOrRemoveComponent } from './basket-item/add-or-remove/add-or-remove.component';



@NgModule({
  declarations: [
    BasketPageMainComponent,
    BasketPageBasketItemComponent,
    AddOrRemoveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasketPageModule { }
