import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UpcomingTransactionsComponent} from './upcoming-transactions/upcoming-transactions.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [{
  path: 'transactions',
  component: UpcomingTransactionsComponent
},
  {
    path: 'summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
