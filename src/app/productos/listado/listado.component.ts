import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  listado: any[] = []

  constructor( private http:HttpClient, private productService: ProductsService ){}

  public numero: number = 0;

  ngOnInit(): void {
    this.getListado()
  }
  
  agregar(url: string, title: string){
    this.productService.agregar( { url,title} )
    console.log(this.productService.listado);
    this.counter()
  }

  getListado(){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(( resp: any ) => {
      for (let index = 0; index < 10; index++) {
        this.listado.push(resp[index]);
        
      }
      console.log(this.listado);
     
    })
    
  }

  counter(){
    this.productService.listado.forEach(element => {
      this.numero += 1
    });
  }

}
