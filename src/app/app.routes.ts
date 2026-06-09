import { Routes } from '@angular/router';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { ProductList } from './shared/components/product-list/product-list';
import { WrapperHome} from './wrapper-home/wrapper-home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: ProductList },

  {path: "home",
    component:WrapperHome
  },
  
  { path: 'detail/:name', component: ProductDetail },

  { path: 'compc', redirectTo: '' },

  {path: '**', component: NotFound},
];
