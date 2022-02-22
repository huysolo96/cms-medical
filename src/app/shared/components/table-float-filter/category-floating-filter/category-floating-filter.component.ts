import { Component } from '@angular/core';
import { FilterChangedEvent, IFloatingFilter, IFloatingFilterParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { BaseCategoryModel } from '@/shared/models';
export interface CategoryFloatingFilterParams extends IFloatingFilterParams {
  value: BaseCategoryModel[];
}

@Component({
  selector: 'app-category-floating-filter',
  templateUrl: './category-floating-filter.component.html',
  styleUrls: ['./category-floating-filter.component.scss']
})
export class CategoryFloatingFilterComponent implements IFloatingFilter, AgFrameworkComponent<CategoryFloatingFilterParams>  {
  onParentModelChanged(parentModel: any, filterChangedEvent?: FilterChangedEvent): void {
  }

  agInit(params: CategoryFloatingFilterParams): void {
    console.log('asdasdasd');
    
  }




}
