import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { components, entryComponents } from './components';
import { directives } from './directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { pipes } from './pipes';
import { RouterModule } from '@angular/router';
import { UploadModule } from '@/upload/upload.module';
import { uploadConfig } from './constant/upload';
import { GravatarModule } from 'ngx-gravatar';
import { NotifierModule } from 'angular-notifier';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const uploadModule = UploadModule.forRoot(uploadConfig);
const libs = [
  MaterialModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  NotifierModule,
  InfiniteScrollModule
];
@NgModule({
  declarations: [
    components,
    directives,
    pipes,
    entryComponents
  ],
  entryComponents: [
    entryComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    libs,
    uploadModule,
    GravatarModule.forRoot({
      fallback: 'mp',
      hasBorder: false,
      borderColor: 'rgba(255, 0, 0, 0.4)',
  }),
    QuillModule.forRoot(),
  ],
  exports: [
    libs,
    pipes,
    components,
    directives,
    entryComponents,
    GravatarModule,
    QuillModule,
    UploadModule,
  ]
})
export class SharedModule { }
