import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }, { path: 'child3', loadChildren: () => import('./child3/child3.module').then(m => m.Child3Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
