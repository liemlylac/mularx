import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mrx-caches',
  templateUrl: './caches.component.html',
  styleUrls: ['./caches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CachesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
