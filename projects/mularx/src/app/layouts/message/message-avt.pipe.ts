import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageAvt',
  pure: true
})
export class MessageAvtPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
  }
}
