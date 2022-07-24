import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { BasketPageMainComponent } from './basket-page/basket-page-main/basket-page-main.component';
import { AuthGuard } from './Guards/AuthGuard';
import { SendOrderGuard } from './Guards/SendOrderGuard';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SendOrderPageComponent } from './send-order-page/send-order-page.component';

const routes: Routes = [
    {path : "", component : MainPageComponent },
  {path : "basket", component : BasketPageMainComponent},
  {path : "auth", component : AuthPageComponent},
  {path : "sendOrder", component : SendOrderPageComponent, canActivate : [SendOrderGuard]},
  {path : "order/:id", component : OrderPageComponent, canActivate : [AuthGuard]},
  {path : "worker", loadChildren : () => import("./worker-module/worker-module.module").then(x => x.WorkerModuleModule), canActivate : [AuthGuard] },
  {path : "**", component : NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
