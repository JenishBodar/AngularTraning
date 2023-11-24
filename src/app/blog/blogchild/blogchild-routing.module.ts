import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogchildComponent } from './blogchild.component';

const routes: Routes = [{ path: '', component: BlogchildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogchildRoutingModule { }
