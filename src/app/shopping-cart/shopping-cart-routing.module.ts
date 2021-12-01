import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';

const routes: Routes = [
   { path: 'create', component: CreateCartComponent },
    { path: 'display', component: DisplayCartComponent },
     { path: 'edit', component: EditCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
