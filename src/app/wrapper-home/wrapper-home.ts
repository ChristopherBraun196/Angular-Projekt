import { Component } from '@angular/core';
import { CompB } from '../comp-b/comp-b';
import { CompA } from '../comp-a/comp-a';

@Component({
  selector: 'app-wrapper-home',
  imports: [CompB, CompA],
  templateUrl: './wrapper-home.html',
  styleUrl: './wrapper-home.scss',
})
export class WrapperHome {}
