import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModule } from './productos/productos.module';
import { ProductsService } from './productos/products.service';
import { CartComponent } from './products/cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MainPageComponent
  ],
  imports: [
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,

    ProductosModule,
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
