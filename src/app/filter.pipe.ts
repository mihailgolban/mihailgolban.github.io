import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterString: string): any {
    if (!items || !filterString) {
      return items;
    }
    const resultArray = [];
    for (const item of items) {
      if (item['name'].toLowerCase().indexOf(filterString.toLowerCase()) >= 0) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
