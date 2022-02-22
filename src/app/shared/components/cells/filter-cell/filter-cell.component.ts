import { Component, OnInit } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

export interface FilterCellRendererParams<Value, Param> extends ICellRendererParams {
  value: Value[];
  colDef: FilterColDef<Value, Param>;
}

export interface FilterColDef<Value, Param> extends ColDef {
  cellEditorParams: {
    paramsValue: Observable<Param[]>;
    getValueFn: (v: Value) => string;
    convertToStrFn: (v: Param) => string
  };
}
export type StringFilterColDef = FilterColDef<string, {name: string}>;

@Component({
  selector: 'app-filter-cell',
  templateUrl: './filter-cell.component.html',
  styleUrls: ['./filter-cell.component.scss']
})
export class FilterCellComponent<Value, Param> implements AgFrameworkComponent<FilterCellRendererParams<Value, Param>> {
  agInit(params: FilterCellRendererParams<Value, Param>): void {
   
  }


}
