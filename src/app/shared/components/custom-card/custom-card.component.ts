import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../../../models/IPerson';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() description: string = "";
  @Input() personsData: IPerson[] = [];
  msg: string = "No data available !";

  constructor() { }

  ngOnInit(): void {
  }

}
