import { Routes } from '@angular/router';
import {CompA} from  './comp-a/comp-a';
import {CompB} from  './comp-b/comp-b';

export const routes: Routes = [

    {
        path:"",
        component: CompA
    },
    {
        path:"compb",
        component: CompB
    }
];
