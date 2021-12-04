import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Plan, plansData } from './pricing.data';

@Component({
  selector: 'mrx-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent implements OnInit {

  plans: Plan[] = plansData;

  constructor() { }

  ngOnInit(): void {
  }

}
