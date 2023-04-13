import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './productos/listado/listado.component';
import { CartComponent } from './products/cart/cart.component';

const routes: Routes = [
      {
        path:'',
        children: [
          {path:'', component: ListadoComponent},
          {path:'cart', component: CartComponent},
 
        ]
      }
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
