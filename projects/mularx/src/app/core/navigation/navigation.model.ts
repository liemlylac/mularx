import { MatSidenav } from '@angular/material/sidenav';

export interface NavigationNode {
  title: string;
  icon?: string;
  url?: string;
  tooltip?: string;
  children?: NavigationNode[]
}

export interface CurrentNode {
  url: string;
  view: string;
  nodes: NavigationNode[];
}

export interface CurrentNodes {
  [view: string]: CurrentNode;
}

export interface NavigationViews {
  [view: string]: NavigationNode[];
}

export interface SidenavViews {
  [view: string]: MatSidenav;
}

