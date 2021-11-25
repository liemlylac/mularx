import { Pipe, PipeTransform } from '@angular/core';
import { NavigationNode } from '../../core/navigation';

@Pipe({
  name: 'navNodeItemIcon',
  pure: true
})
export class NavItemIconPipe implements PipeTransform {

  transform(node: NavigationNode, defaultIcon = ''): any {
    return node.icon ? node.icon : node.url ? '' : defaultIcon;
  }
}
