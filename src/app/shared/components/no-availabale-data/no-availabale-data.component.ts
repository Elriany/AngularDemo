import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-availabale-data',
  templateUrl: './no-availabale-data.component.html',
  styleUrls: ['./no-availabale-data.component.css']
})
export class NoAvailabaleDataComponent implements OnInit {

  @Input() message : string = "No available data !" ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
