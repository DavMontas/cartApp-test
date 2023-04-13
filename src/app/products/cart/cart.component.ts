import { Component } from '@angular/core';
import { ProductsService } from 'src/app/productos/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {

  get listado(){
    return this.pService.listado;
  }
  constructor(private pService: ProductsService){
  }

    ngOnInit(): void {
      this.pService.listado
    }
  

}
