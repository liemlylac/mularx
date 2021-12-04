import { Pipe, PipeTransform } from '@angular/core';
import { NavigationNode } from '../../../core/navigation';

@Pipe({
  name: 'sidebarItemIcon',
  pure: true
})
export class SidebarItemIconPipe implements PipeTransform {

  transform(node: NavigationNode, defaultIcon = ''): any {
    return node.icon ? node.icon : node.url ? '' : defaultIcon;
  }
}
