import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { WindowToken } from '../../../core/window';
import { Feature, features } from './features.data';

@Component({
  selector: 'mrx-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent implements OnInit {

  features: Feature[] = features;

  constructor(
    @Inject(WindowToken)
    private window: Window
  ) { }

  ngOnInit(): void {
  }

  openLink(link: string) {
    this.window.open(link, '_blank');
  }
}
