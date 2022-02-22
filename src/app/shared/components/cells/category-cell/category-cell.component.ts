import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp, AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BaseCategoryModel } from '@/shared/models';
import { map, filter } from 'rxjs/operators';
interface CategoryCellRendererParams extends ICellRendererParams {
  value: string[];
  colDef: ColDef;
}
@Component({
  selector: 'app-category-cell',
  templateUrl: './category-cell.component.html',
  styleUrls: ['./category-cell.component.scss']
})
export class CategoryCellComponent implements AgFrameworkComponent<CategoryCellRendererParams>  {
  categories$: Observable<BaseCategoryModel[]>;
  categoriesName$: Observable<string>;
  agInit(params: CategoryCellRendererParams): void {
    this.categories$ = (params.colDef.cellEditorParams as Observable<BaseCategoryModel[]>);
    this.categoriesName$ = this.categories$.pipe(
      filter(categories => categories != null && categories.length > 0),
      map(categories => {
        try {
          return params.value.map(cId => {
            const category = categories.find(c => c.id === cId);
            return category ? category.name : null;
          })
            .filter(categoryName => categoryName != null)
            .reduceRight((prev, curr) => `${prev}, ${curr}`);
        } catch (error) {
          return '';
        }
      })
    );
  }


}
