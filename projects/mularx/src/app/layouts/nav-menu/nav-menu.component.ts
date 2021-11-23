import { Component, Input, } from '@angular/core';
import { CurrentNode, NavigationNode } from '../../core/navigation';

@Component({
  selector: 'mrx-nav-menu',
  template: `
    <mrx-nav-item
      *ngFor="let node of filteredNodes"
      [node]="node" [isWide]="isWide"
      [selectedNodes]="currentNode.nodes"
    >
    </mrx-nav-item>
  `,
})
export class NavMenuComponent {

  @Input() currentNode: CurrentNode;
  @Input() isWide = false;
  @Input() nodes: NavigationNode[];

  get filteredNodes() {
    return this.nodes ? this.nodes.filter(n => !n.hidden) : [];
  }
}
