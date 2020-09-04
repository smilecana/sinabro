import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { SummaryComponent } from './pages/summary/summary.component';
import { UpcomingTransactionsComponent } from './pages/upcoming-transactions/upcoming-transactions.component';
import { LoginComponent } from './pages/login/login.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AccountsSummaryComponent } from './pages/accounts-summary/accounts-summary.component';
import { AccountDetailComponent } from './pages/account-detail/account-detail.component';
import { UploadAccountComponent } from './pages/upload-account/upload-account.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    UpcomingTransactionsComponent,
    LoginComponent,
    AccountsSummaryComponent,
    AccountDetailComponent,
    UploadAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxChartsModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
