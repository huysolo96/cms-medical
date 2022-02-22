import { Component, OnInit, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDialogWithComponentData, AEditComponent } from '@/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  @ViewChild('editContent', { read: ViewContainerRef, static: true }) editContent: ViewContainerRef;
  invalid$ = new Observable<boolean>();
  editRef: AEditComponent<any>;
  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: EditDialogWithComponentData<any>) {
    }

  ngOnInit() {
    this.createEditContent();
  }

  createEditContent() {
    const resolve = this.resolver.resolveComponentFactory(this.data.componentType);
    this.editRef = this.editContent.createComponent(resolve).instance;
    this.editRef.initForm(this.data.content);
    this.invalid$ = this.editRef.isInvalid$;
  }

  onSubmitForm() {
    this.dialogRef.close(this.editRef.getValue());
  }
  onClose() {
    this.dialogRef.close();
  }

}
