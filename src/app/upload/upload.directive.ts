import { Directive, AfterViewInit, Renderer2, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { UploadConfig, UploadConfigService } from './upload-config';
import { UploadService } from './upload.service';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective implements AfterViewInit {
  @Input() config: UploadConfig = this.configSv;
  @Output() readonly success = new EventEmitter<string>();
  @Output() readonly failed = new EventEmitter<any>();
  @Output() readonly uploading = new EventEmitter<boolean>();

  private fileInput: HTMLInputElement;


  ngAfterViewInit(): void {
    this.generateUploadInput();
  }

  constructor(
    private renderer: Renderer2,
    private uploadService: UploadService,
    @Inject(UploadConfigService) private configSv: UploadConfig
  ) {
    this.generateUploadInput();
  }

  @HostListener('click')
  uploadFile() {
    this.fileInput.click();
  }

  private generateUploadInput() {
    this.fileInput = this.renderer.createElement('input') as HTMLInputElement;
    this.fileInput.type = 'file';
    this.fileInput.multiple =  this.config.multiple;
    this.fileInput.onchange = (ev: any) => this.onUpload(ev.target.files);

  }

  onUpload(files: FileList) {
    this.uploading.emit(true);
    this.uploadService.upload(files.item(0), this.configSv.api).subscribe(res => {
      if (res) {
        this.success.emit(res.staticPath);
      }
    }, (err) => {
      this.failed.emit(err);
    }, () => {
      this.uploading.emit(false);
    });
  }

}
