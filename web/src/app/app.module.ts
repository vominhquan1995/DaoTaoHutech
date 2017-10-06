import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestOptions, Http, XHRBackend, HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { CommonModule } from '@angular/common';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing, routes } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
// something else
import { ManageStateService } from './shared/manage-state.service';
import { CookieModule } from 'ngx-cookie';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './auth/token.service';
import { httpClientFactory, HttpCustom } from './auth/http-custom';
import { DanhMucService } from "app/shared/danhmuc.service";
import { AppTranslationModule } from "app/app.translation.module";
import { Login } from "app/components/login/login.component";
import { NavBarComponent } from "app/components/nav-bar/nav-bar.component";
import { LayoutComponent } from "app/components/layout.component";
import { HomeComponent } from "app/components/home/home.component";
import { ScheduleComponent } from "app/components/schedule/schedule.component";
import { ScoresComponent } from "app/components/scores/scores.component";
import { ExamScheduleComponent } from "app/components/exam-schedule/exam-schedule.component";
import { UserService } from "app/service/user.service";
import { SharedModule } from "app/shared/shared.module";
import { FooterComponent } from "app/components/footer/footer.component";
// import { Login } from "app/components/login";

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    LayoutComponent,
    Login,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ScheduleComponent,
    ScoresComponent,
    ExamScheduleComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    CookieModule.forRoot(),
    routing,
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    SharedModule
  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    ManageStateService,
    TokenService,
    AuthGuard,
    AuthService,
    UserService,
    { provide: Http, useFactory: httpClientFactory, deps: [XHRBackend, RequestOptions, TokenService, Router] },
    DanhMucService,
    HttpCustom
  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
