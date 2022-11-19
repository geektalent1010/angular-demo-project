import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'detail/:code',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
