import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if (!value) return null;
    if (!args) return value;
    return value.slice(args[0].start, args[0].limit);
  }

}
