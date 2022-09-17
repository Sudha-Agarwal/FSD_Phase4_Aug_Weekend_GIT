import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase'
})
export class CapitalcasePipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    return value?.toUpperCase();
  }

}
