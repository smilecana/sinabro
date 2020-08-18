import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})

export class SummaryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  public tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'}
  ];
  public view: any[] = [500, 300];

  public multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000
        },
        {
          name: '2010',
          value: 73000000
        },
        {
          name: '2011',
          value: 89400000
        }
      ]
    },

    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 250000000
        },
        {
          name: '2010',
          value: 309000000
        },
        {
          name: '2011',
          value: 311000000
        }
      ]
    },

    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 58000000
        },
        {
          name: '2010',
          value: 50000020
        },
        {
          name: '2011',
          value: 58000000
        }
      ]
    },
    {
      name: 'UK',
      series: [
        {
          name: '1990',
          value: 57000000
        },
        {
          name: '2010',
          value: 62000000
        }
      ]
    }
  ];

  public single = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    },
    {
      name: 'UK',
      value: 6200000
    },
    {
      name: 'Italy',
      value: 4200000
    },
    {
      name: 'Spain',
      value: 8200000
    }
  ];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  // options
  public gradient = true;
  public showLegend = true;
  public showLabels = true;
  public isDoughnut = false;
  public legend = true;
  public animations = true;
  public xAxis = true;
  public yAxis = true;
  public showYAxisLabel = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Year';
  public yAxisLabel = 'Population';
  public timeline = true;

  constructor() {
  }

  public onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  public onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  public onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  };

}
