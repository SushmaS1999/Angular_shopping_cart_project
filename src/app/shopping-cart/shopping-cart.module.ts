import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';


@NgModule({
  declarations: [
    CreateCartComponent,
    DisplayCartComponent,
    EditCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
