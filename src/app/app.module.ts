import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryItemComponent } from './categories-list/category-item/category-item.component';
import { CategoriesService, ICategoriesService } from './Services/CategoriesService';
import { SharedModule } from 'src/shared/shared.module';
import { ItemListComponent } from './main-page/item-list/item-list.component';
import { ItemComponent } from './main-page/item-list/item/item.component';
import { IShopStateService, ShopStateService } from './Services/ShopStateService';
import { ILoadingStateService, LoadingStateService } from './Services/LoadingStateService';
import { ItemModalComponent } from './main-page/item-list/item/item-modal/item-modal.component';
import { BasketStateService, IBasketStateService } from './Services/BasketStateService';
import { ItemAddToBasketButtonComponent } from './main-page/item-list/item/item-add-to-basket-button/item-add-to-basket-button.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoriesListComponent,
    CategoryItemComponent,
    ItemListComponent,
    ItemComponent,
    ItemModalComponent,
    ItemAddToBasketButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide : ICategoriesService,
      useClass :CategoriesService
    },
    {
      provide : IShopStateService,
      useValue : new ShopStateService()
    },
    {
      provide : ILoadingStateService,
      useValue : new LoadingStateService()
    },
    {
      provide : IBasketStateService,
      useValue : new BasketStateService()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
