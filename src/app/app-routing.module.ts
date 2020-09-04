import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UpcomingTransactionsComponent} from './pages/upcoming-transactions/upcoming-transactions.component';
import {SummaryComponent} from './pages/summary/summary.component';
import {AccountsSummaryComponent} from './pages/accounts-summary/accounts-summary.component';
import {AccountDetailComponent} from './pages/account-detail/account-detail.component';
import {UploadAccountComponent} from './pages/upload-account/upload-account.component';

const routes: Routes = [{
  path: 'transactions',
  component: UpcomingTransactionsComponent
},
  {
    path: 'summary',
    component: SummaryComponent
  } ,
  {
    path: 'accounts',
    component: AccountsSummaryComponent
  },
  {
    path: 'accounts/check/:id',
    component: AccountDetailComponent
  },
  {
    path: 'accounts/check/:id/upload',
    component: UploadAccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
