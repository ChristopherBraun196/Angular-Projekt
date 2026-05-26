import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";



// import { ProductList } from './shared/components/product-list/product-list';
// import { ProductDetail } from './shared/components/product-detail/product-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  lang = "de"

  errormsg = ""
   
  list = []

  myVar = "hello_world"
}

// export class App {
  // protected readonly title = signal('product-list');
  // our_text = "banana love"

  // ngOnInit(){
  //   this.our_text = "das ist ein hook text"
  // }

  // textGen (){
  //   this.our_text = "banana love 2.0"

  // }

  // isDisabled = false

  // getBtnColor(){
  //   return 'blue'
  // }
// }
