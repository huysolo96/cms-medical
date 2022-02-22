import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from './upload.service';
import { UploadDirective } from './upload.directive';
import { FormUploadDirective } from './form-upload.directive';
import { UploadConfig, UploadConfigService } from './upload-config';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      UploadDirective,
      FormUploadDirective
   ],
   exports: [
      UploadDirective,
      FormUploadDirective
   ]
})
export class UploadModule {
   static forRoot(config: UploadConfig): ModuleWithProviders {
      return {
         ngModule: UploadModule,
         providers: [
            UploadService,
            {
               provide: UploadConfigService,
               useValue: config
            }
         ],
      };
   }
}
