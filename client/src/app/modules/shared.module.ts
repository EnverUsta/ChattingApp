import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import {
  NgbDatepickerModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxGalleryModule,
    NgxSpinnerModule.forRoot({
      type: 'line-scale-party',
    }),
    FileUploadModule,
    NgbDatepickerModule,
    NgbPaginationModule,
  ],
  exports: [
    BrowserAnimationsModule,
    ToastrModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    FileUploadModule,
    NgbPaginationModule,
  ],
})
export class SharedModule {}
