import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'child', loadChildren: () => import('./child/child.module').then(m => m.ChildModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
