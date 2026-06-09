import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CounterService } from '../counter_service';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.scss',
   providers:[CounterService]
})
export class CompB {
  private route = inject(ActivatedRoute);
  counterService = inject(CounterService);

  myParamVar: string | null;

  constructor() {
    this.myParamVar = this.route.snapshot.paramMap.get('uid');
  }
}
