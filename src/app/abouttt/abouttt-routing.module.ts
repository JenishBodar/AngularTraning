import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutttComponent } from './abouttt.component';

const routes: Routes = [{ path: '', component: AboutttComponent }, { path: 'child2', loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutttRoutingModule { }
