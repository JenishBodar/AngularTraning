import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'child4', loadChildren: () => import('./child4/child4.module').then(m => m.Child4Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
