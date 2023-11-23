import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelppRoutingModule } from './helpp-routing.module';
import { HelppComponent } from './helpp.component';


@NgModule({
  declarations: [
    HelppComponent
  ],
  imports: [
    CommonModule,
    HelppRoutingModule
  ]
})
export class HelppModule { }
