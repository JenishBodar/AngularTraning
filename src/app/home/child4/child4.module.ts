import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child4RoutingModule } from './child4-routing.module';
import { Child4Component } from './child4.component';


@NgModule({
  declarations: [
    Child4Component
  ],
  imports: [
    CommonModule,
    Child4RoutingModule
  ]
})
export class Child4Module { }
