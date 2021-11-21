import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // to specify the routes we use forRoot method and passing the routes that we have initialized
  ],
  exports: [ RouterModule ]   //to make routermodule for app module
})
export class AppRoutingModule { }
