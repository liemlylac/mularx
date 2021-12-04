import { Component, Input, } from '@angular/core';
import { CurrentNode, NavigationNode } from '../../core/navigation';

@Component({
  selector: 'mrx-nav-menu',
  template: `
    <mrx-nav-item
      *ngFor="let node of nodes"
      [node]="node" [isWide]="isWide"
      [selectedNodes]="currentNode.nodes"
    >
    </mrx-nav-item>
  `,
})
export class SidebarComponent {

  @Input() currentNode: CurrentNode;
  @Input() isWide = false;
  @Input() nodes: NavigationNode[];

  constructor() {
  }
}
