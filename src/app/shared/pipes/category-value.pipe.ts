import { Pipe, PipeTransform } from '@angular/core';
import { BaseCategoryModel } from '../models';

@Pipe({
  name: 'categoryValue'
})
export class CategoryValuePipe implements PipeTransform {

  transform(value: string, args: BaseCategoryModel[]): any {
    const category = args.find(c => c.id === value);
    return category;
  }

}
