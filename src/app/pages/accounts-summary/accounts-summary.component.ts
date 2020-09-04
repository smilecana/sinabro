import { Component, OnInit } from '@angular/core';
import {PeriodicElement} from '../summary/summary.component';
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
];
@Component({
  selector: 'app-accounts-summary',
  templateUrl: './accounts-summary.component.html',
  styleUrls: ['./accounts-summary.component.scss']
})
export class AccountsSummaryComponent implements OnInit {
  public panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
