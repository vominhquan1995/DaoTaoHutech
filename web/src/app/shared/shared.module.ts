import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgSpinKitModule } from 'ng-spin-kit';
import { Select2Module } from 'ng2-select2';
import { ModalModule as Ng2BootStrapModalModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { Ng2Webstorage } from 'ng2-webstorage';
import { CKEditorModule } from "ng2-ckeditor/lib";
import { QuillModule } from 'ngx-quill';

import { NgaModule } from '../theme/nga.module';
import { LoaderComponent } from './loader/loader.component';
import { PagingComponent } from './paging/paging.component';
import { Select2InputComponent } from './select2-input.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { NumberFormatPipe } from './number-format.pipe';
import { ProgressBarModal } from './process-bar-modal/progress-bar-modal.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSystemService } from './file-system.service';
import { LogService } from './logger';
import { CutTextPipe } from './pipe/cut-text.pipe';
import { PrintTimePipe } from './pipe/print_time.pipe';
import { DecodeHTMLPipe } from './pipe/decode-html.pipe';
import { SafeHtmlPipe } from './pipe/safeHTML.pipe';
import { PrintFullTimePipe } from "app/shared/pipe/print-full-time.pipe";
import { TranslateStatusPipe } from "app/shared/pipe/translate-status.pipe";
import { TranslateSendTypePipe } from "app/shared/pipe/translate-sendtype.pipe";
import { DateTimePickerContactsComponent } from "app/shared/date-time-picker/date-time-picker.component";
import { AuthDirective } from "app/auth/auth.directive";
import { Safe2 } from "./pipe/styletrust.pipe";
import { YearPicker } from "app/shared/year-picker/year-picker";
@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        NgSpinKitModule,
        Select2Module,
        Ng2BootStrapModalModule.forRoot(),
        DatepickerModule.forRoot(),
        TextMaskModule,
        ProgressbarModule.forRoot(),
        FileUploadModule,
        AlertModule,
        MyDatePickerModule,
        CKEditorModule,
    ],
    declarations: [
        Safe2,
        LoaderComponent,
        PagingComponent,
        Select2InputComponent,
        ErrorModalComponent,
        NumberFormatPipe,
        ProgressBarModal,
        FileUploadComponent,
        CutTextPipe,
        DecodeHTMLPipe,
        PrintTimePipe,
        SafeHtmlPipe,
        PrintFullTimePipe,
        TranslateStatusPipe,
        TranslateSendTypePipe,
        DateTimePickerContactsComponent,
        YearPicker
    ],
    providers: [AlertConfig, FileSystemService, LogService],
    exports: [
        LoaderComponent,
        PagingComponent,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NgxPaginationModule,
        Select2InputComponent,
        ErrorModalComponent,
        DatepickerModule,
        TextMaskModule,
        NumberFormatPipe,
        ProgressbarModule,
        ProgressBarModal,
        FileUploadModule,
        FileUploadComponent,
        AlertModule,
        QuillModule,
        Ng2Webstorage,
        NgaModule,
        CKEditorModule,
        Ng2BootStrapModalModule,
        Select2Module,
        CutTextPipe,
        DecodeHTMLPipe,
        PrintTimePipe,
        SafeHtmlPipe,
        PrintFullTimePipe,
        TranslateStatusPipe,
        TranslateSendTypePipe,
        Safe2,
        DateTimePickerContactsComponent,
        YearPicker
    ]
})
export class SharedModule {

}