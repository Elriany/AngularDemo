import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IPopUpData } from '../../Models/IPopUpData';

@Component({
  selector: 'app-error-pop-up',
  templateUrl: './error-pop-up.component.html',
  styleUrls: ['./error-pop-up.component.css']
})
export class ErrorPopUpComponent implements OnInit {

  message: string;
  IsNetworkError: boolean = false;

  constructor(public dialogRef: MatDialogRef<ErrorPopUpComponent>,@Inject(MAT_DIALOG_DATA) public data: IPopUpData) {
    this.message = data.Msg;
    this.IsNetworkError = data.IsNetworkError;
  }

  ngOnInit() { }

  closeDialoge() {
    this.dialogRef.close();
  }

}
