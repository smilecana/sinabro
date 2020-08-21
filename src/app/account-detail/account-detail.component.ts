import { Component, OnInit } from '@angular/core';
export interface Transation  {
  date: string;
  description: string;
  withdrawals: number;
  deposits: number;
  balance: number;
}
const ELEMENT_DATA2: Transation[] = [
  {date: '4/22/2020', description: 'COSTCO WHOLESAL', withdrawals: 259.08, deposits: 0 , balance: 11500.35},
  {date: '4/23/2020', description: 'NSPI             BPY', withdrawals: 136.58, deposits: 0 , balance: 11363.77},
  {date: '4/29/2020', description: 'E-TRANSFER CA***XMc ', withdrawals: 0, deposits: 3.25, balance: 11367.02},
  {date: '4/29/2020', description: 'E-TRANSFER CA***C4Z ', withdrawals: 0, deposits: 92.6, balance: 11459.62},
  {date: '4/30/2020', description: 'PUBLIC MOBILE     _V', withdrawals: 20.7, deposits: 0 , balance: 11438.92},
  {date: '4/30/2020', description: 'MONTHLY ACCOUNT FEE ', withdrawals: 10.95, deposits: 0 , balance: 11427.97},
];
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['date', 'description', 'withdrawals', 'deposits', 'balance'];
  dataSource = ELEMENT_DATA2;
  ngOnInit(): void {
  }

}
