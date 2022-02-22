import { Component, OnInit } from '@angular/core';
import { ICellRendererParams, ColDef } from 'ag-grid-community';
import { AgFrameworkComponent } from 'ag-grid-angular';

interface DateCellRendererParams extends ICellRendererParams {
  value: string;
  colDef: ColDef;
}

@Component({
  selector: 'app-avatar-cell',
  templateUrl: './avatar-cell.component.html',
  styleUrls: ['./avatar-cell.component.scss']
})
export class AvatarCellComponent implements AgFrameworkComponent<DateCellRendererParams> {
  value = '';
  agInit(params: DateCellRendererParams): void {
    this.value = params.value;
  }



}
