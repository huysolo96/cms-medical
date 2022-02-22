import { BaseItemModel, BaseCategoryModel } from '@/shared/models';
// import { BaseItemGenericCategoryModel } from '@/shared/models/base-item.model';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseItemState, BaseItemQuery } from '../base-item';
import { BaseCategoryState, BaseCategoryQuery } from '../base-category';
import { Injectable } from '@angular/core';
@Injectable()
export class BaseCategoryItemQuery<Item extends BaseItemModel, Category extends BaseCategoryModel>  {

  constructor(
    protected itemQuery: BaseItemQuery<Item, BaseItemState<Item>>,
    protected categoryQuery: BaseCategoryQuery<Category, BaseCategoryState<Category>>
  ) { }

  selectAllItemWithFilteredCategory() {
    return combineLatest(
      [
        this.itemQuery.selectAll(),
        this.categoryQuery.selectAll()
      ]
    ).pipe(map(([items, categories]) => {
      if (!items || !categories) {
        return [];
      }
      return items.map(item => ({
        ...item,
        categories: item.categories.map(cId => categories.find(c => c.id === cId))
      }));
    }));
  }
}

