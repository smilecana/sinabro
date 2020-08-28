import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-account',
  templateUrl: './upload-account.component.html',
  styleUrls: ['./upload-account.component.scss']
})
export class UploadAccountComponent implements OnInit {
  fileToUpload: File = null;
  constructor() { }

  ngOnInit(): void {}

  public handleFileInput(files: EventTarget): void {
    console.log(files);
  }
}
