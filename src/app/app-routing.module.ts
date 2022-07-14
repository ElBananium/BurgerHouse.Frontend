import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainResolver } from './Resolvers/MainResolver';

const routes: Routes = [
  {path : "", component : MainPageComponent, resolve : {sis : MainResolver}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
