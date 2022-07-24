import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { RouterModule } from '@angular/router';
import { IOrderListService, OrderListService } from './Services/OrderListService';
import { OrdersListComponent } from './worker-page/orders-list/orders-list.component';
import { MakeOrderComponent } from './worker-page/make-order/make-order.component';
import { SharedModule } from 'src/shared/shared.module';
import { OrderItemComponent } from './worker-page/orders-list/order-item/order-item.component';
import { OrderPageComponent } from './worker-page/order-page/order-page.component';
import { IWorkerService, WorkerService } from './Services/WorkerService';
import { StoplistComponent } from './stoplist/stoplist.component';


const routes = [
  {
    path : "",
    component : WorkerPageComponent,
    children :
    [
    {path : "", redirectTo : "viewOrders",  pathMatch: 'full'},
    {path : "viewOrders", children : 
    [
      {path : "", component : OrdersListComponent},
      {path : ":id", component : OrderPageComponent}
    ] },
    {path : "makeOrder", component : MakeOrderComponent},
    ]
  }
  
  
]

@NgModule({
  declarations: [WorkerPageComponent, OrdersListComponent, MakeOrderComponent, OrderItemComponent, OrderPageComponent, StoplistComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports : [
    RouterModule
  ],

  providers : [

    {
      provide : IOrderListService,
     useExisting : OrderListService

    },
    [OrderListService],
    {
      provide : IWorkerService,
      useExisting : WorkerService
    },
    [WorkerService]
  ]
})
export class WorkerModuleModule { }
