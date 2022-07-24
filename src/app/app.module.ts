import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesService, ICategoriesService } from './Services/CategoriesService';
import { SharedModule } from 'src/shared/shared.module';
import { ItemListComponent } from './main-page/item-list/item-list.component';
import { ItemComponent } from './main-page/item-list/item/item.component';
import { IShopStateService, ShopStateService } from './Services/ShopStateService';
import { ILoadingStateService, LoadingStateService } from './Services/LoadingStateService';
import { ItemModalComponent } from './main-page/item-list/item/item-modal/item-modal.component';
import { BasketStateService, IBasketStateService } from './Services/BasketStateService';
import { ItemAddToBasketButtonComponent } from './main-page/item-list/item/item-add-to-basket-button/item-add-to-basket-button.component';
import { CategoriesListComponent } from './main-page/categories-list/categories-list.component';
import { CategoryItemComponent } from './main-page/categories-list/category-item/category-item.component';
import { BasketLinkComponent } from './main-page/basket-link/basket-link.component';
import { BasketPageModule } from './basket-page/basket-page.module';
import { IOrdersService, OrdersSender } from './Services/OrdersService';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { InputPhoneComponent } from './auth-page/input-phone/input-phone.component';
import { InputCodeComponent } from './auth-page/input-code/input-code.component';
import { BoxInputComponent } from './auth-page/box-input/box-input.component';
import { ListOfBoxInputComponent } from './auth-page/list-of-box-input/list-of-box-input.component';
import { AuthService, IAuthService } from './Services/AuthService';
import { SendOrderPageComponent } from './send-order-page/send-order-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProgressBarComponent } from './order-page/progress-bar/progress-bar.component';
import { OrderedItemComponent } from './order-page/ordered-item/ordered-item.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


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
    BasketLinkComponent,
    AuthPageComponent,
    InputPhoneComponent,
    InputCodeComponent,
    BoxInputComponent,
    ListOfBoxInputComponent,
    SendOrderPageComponent,
    OrderPageComponent,
    ProgressBarComponent,
    OrderedItemComponent,
    NotFoundPageComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    BasketPageModule,
    
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
    },
    {
      provide : IOrdersService,
      useExisting : OrdersSender
    },
    {
      provide : OrdersSender
    },
    {
      provide : IAuthService,
      useClass : AuthService
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
