import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterString: string): any {
    if (!items) {
      return items;
    }
    const resultArray = [];
    for (const item of items) {
      if (item['fork'] === false) {
        if (!filterString) {
          resultArray.push(item);
        } else if (item['name'].toLowerCase().indexOf(filterString.toLowerCase()) >= 0) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }
}
