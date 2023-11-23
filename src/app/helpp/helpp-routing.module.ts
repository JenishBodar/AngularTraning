import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelppComponent } from './helpp.component';

const routes: Routes = [{ path: '', component: HelppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelppRoutingModule { }
