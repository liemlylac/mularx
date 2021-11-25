import { Component, Input, OnInit } from '@angular/core';
import { NavigationNode } from '../../core/navigation';

@Component({
  selector: 'mrx-nav-item',
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent implements OnInit {
  @Input() isWide = false;
  @Input() level = 1;
  @Input() node: NavigationNode;
  @Input() isParentExpanded = true;
  @Input() selectedNodes: NavigationNode[];

  defaultNoUrlIcon = 'block';
  isExpanded = false;
  isSelected = false;
  classes: {[index: string]: boolean };
  nodeChildren: NavigationNode[];

  ngOnInit() {
    this.nodeChildren = this.node && this.node.children ? this.node.children.filter(n => !n.hidden) : [];
    if (this.selectedNodes) {
      const ix = this.selectedNodes.indexOf(this.node);
      this.isSelected = ix !== -1;
      this.isExpanded = this.isParentExpanded && (
        this.isSelected ||
        ( this.isWide && this.isExpanded )
      );
    } else {
      this.isSelected = false;
    }
    this.setClasses();
  }

  setClasses() {
    this.classes = {
      [`level-${this.level}`]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected,
    };
  }

  headerClicked() {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }

  get nodeIcon(): string {
    const node = this.node;
    return node.icon ? node.icon : node.url ? '' : this.defaultNoUrlIcon;
  }
}
