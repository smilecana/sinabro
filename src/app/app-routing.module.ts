import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UpcomingTransactionsComponent} from './upcoming-transactions/upcoming-transactions.component';
import {SummaryComponent} from './summary/summary.component';
import {AccountsSummaryComponent} from './accounts-summary/accounts-summary.component';
import {AccountDetailComponent} from './account-detail/account-detail.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
