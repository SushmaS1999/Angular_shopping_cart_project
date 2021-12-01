import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoutingComponent } from '../routing/routing-component';


import { RoutingComponent } from './routing/routing.component';


const routes: Routes = [
   { path: 'first-component', component: RoutingComponent },
   { path: 'home',
   loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
