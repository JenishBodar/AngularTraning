import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogchildRoutingModule } from './blogchild-routing.module';
import { BlogchildComponent } from './blogchild.component';


@NgModule({
  declarations: [
    BlogchildComponent
  ],
  imports: [
    CommonModule,
    BlogchildRoutingModule
  ]
})
export class BlogchildModule { }
