import { Component, Pipe, signal, PipeTransform } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { CurrencyPipe, JsonPipe } from '@angular/common';

// import { ProductList } from './shared/components/product-list/product-list';
// import { ProductDetail } from './shared/components/product-detail/product-detail';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit:number = 10): string {
    return value.length < 10 ? value : value.substring(0, 10) + '...';
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CurrencyPipe, JsonPipe, TruncatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  lang = 'de';

  errormsg = '';

  list = [];

  myVar = 'hello_world';
  price = 501.95;
  data = { hallo: 'welt' };
  textVar = "das ist ein kurzer Text"
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
