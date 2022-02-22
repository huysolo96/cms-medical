import { Directive, ContentChild, AfterViewInit } from '@angular/core';
import { UploadDirective } from './upload.directive';
import { NgControl  } from '@angular/forms';

@Directive({
  selector: '[appFormUpload]'
})
export class FormUploadDirective implements AfterViewInit {
  @ContentChild(UploadDirective, {static: true}) uploadButton: UploadDirective;
  @ContentChild(NgControl, {static: true} ) formControl: NgControl;
  constructor() { }

  ngAfterViewInit() {
    this.bindingControlAndInput();
  }

  bindingControlAndInput() {
    if (this.formControl == null) {
      throw new Error(`appFormUpload must contain a ${NgControl.name.toString()}.` );
    }
    if (this.uploadButton  == null) {
      throw new Error(`appFormUpload must contain a ${UploadDirective.name.toString()}.`);
    }
    this.uploadButton.success.subscribe((v: any) => {
      this.formControl.control.setValue(v);
    });
    this.uploadButton.uploading.subscribe((uploading: boolean) => {
      if (uploading) {
        this.formControl.control.disable();
      } else {
        this.formControl.control.enable();
      }
    });
  }

}
