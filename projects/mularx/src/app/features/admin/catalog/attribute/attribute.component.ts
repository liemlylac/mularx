import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mrx-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
