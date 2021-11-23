import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notifyAvatar',
  pure: true
})
export class NotifyAvatarPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.name.split(' ')
      .map((part: string) => part.charAt(0).toUpperCase()).slice(0,2).join('')
  }
}

@Pipe({
  name: 'notifyUnread',
  pure: true,
})
export class NotifyUnread implements PipeTransform {
  transform(value: any, max: number): string {
    return value > max ? `${max}+` : value > 0 ? value : '';
  }
}
