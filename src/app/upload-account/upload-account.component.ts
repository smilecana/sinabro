import { Component, OnInit } from '@angular/core';
export interface CSVRecord {
  date: string;
  description: string;
  withdrawals: number;
  deposits: number;
  balance: number;
}
@Component({
  selector: 'app-upload-account',
  templateUrl: './upload-account.component.html',
  styleUrls: ['./upload-account.component.scss']
})
export class UploadAccountComponent implements OnInit {
  public records: [];
  public dataSource;
  public displayedColumns: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  public fileupload(file: any): void {
    this.readThis(file.target);
  }
  public readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    // tslint:disable-next-line:only-arrow-functions
    myReader.readAsText(file);
    myReader.onload = () => {
      const csvData = myReader.result;
      const currentRecord = (csvData as string).split(/\r\n|\n/);
      this.records = this.getDataRecordsArrayFromCSVFile(currentRecord);
      this.dataSource = this.records;
    };
  }

  public getDataRecordsArrayFromCSVFile(csvRecordsArray: any): any {
    const csvArr = [];
    for ( const csv of csvRecordsArray) {
      const curruntRecord = (csv as string).split(',');
      // tslint:disable-next-line:prefer-const
      let csvRecord: CSVRecord = {date: '', description: '', withdrawals: 0, deposits: 0, balance: 0};
      if (curruntRecord[0] !== '') {
        csvRecord.date = curruntRecord[0].trim();
        csvRecord.description =  curruntRecord[1].trim();
        csvRecord.withdrawals =  parseFloat(curruntRecord[2] === '' ? '0' : curruntRecord[2] );
        csvRecord.deposits =  parseFloat(curruntRecord[3] === '' ? '0' : curruntRecord[3]);
        csvRecord.balance =  parseFloat(curruntRecord[4] === '' ? '0' : curruntRecord[4]);
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
}
