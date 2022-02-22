import { Component, OnInit } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
interface DateCellRendererParams extends ICellRendererParams {
  value: string;
}
@Component({
  selector: 'app-date-cell',
  templateUrl: './date-cell.component.html',
  styleUrls: ['./date-cell.component.scss']
})
export class DateCellComponent implements AgFrameworkComponent<DateCellRendererParams> {
  value: string;
  param: string;
  agInit(params: DateCellRendererParams): void {
    this.value = params.value;
    this.param = params.colDef.cellEditorParams ? params.colDef.cellEditorParams as string : 'dd/MM/yyyy';
  }

}
