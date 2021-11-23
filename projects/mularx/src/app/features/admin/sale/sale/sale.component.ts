import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mrx-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
