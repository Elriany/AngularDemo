import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personsData: any[] = [];
  description: string = "This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.";
  loading: boolean = true;
  subs = new SubSink();

  constructor(private _personService: PersonService) { }

  ngOnInit(): void {

    this.subs.add(this._personService.getPersons().subscribe({
        next: (data) => this.personsData = data,
        error: (err) => {
          this.loading = false;
          console.error(err);
         },
        complete: () => {
          this.loading = false;
        } 
      }));  
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
