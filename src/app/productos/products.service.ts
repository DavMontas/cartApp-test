import { Injectable } from '@angular/core';
import { IProduct } from './listado/interfaces/product.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _listado: IProduct[] = []

  get listado(){
    return this._listado;
  }

  counter(){
    
  }

  agregar( p: IProduct){
    this._listado.push(p)
  }

  eliminar(){
    this.listado.shift()
  }

}
