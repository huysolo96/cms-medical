import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/dialog';
import { ConfirmDialogData } from '../models/confirm-dialog-data';

@Directive({
  selector: '[appDeleteConfirm]'
})
export class DeleteConfirmDirective {
  @Input() objectName: string;
  @Output() confirmDelete = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  @HostListener('click')
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        label: 'Xác nhận xóa',
        message: `Bạn có muốn xóa ${this.objectName} này không?`,
        cancelTextButton: 'Hủy',
        confirmTextButton: 'Xác nhận'
      } as ConfirmDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirmDelete.emit();
      }
    });
  }

}
