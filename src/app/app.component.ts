import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  public shouldRun = true;
  public title =  'my-app';
  mobileQuery: MediaQueryList;

  navigation = [
    {name : 'Summary', icon : 'insert_chart', link: '/myaccounts'},
    {name : 'Accounts', icon : 'account_balance',  link: '/accounts'},
  ];




  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnDestroy(): void {
  }

}
