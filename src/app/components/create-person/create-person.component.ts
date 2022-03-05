import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubSink } from 'subsink';
import { ICreatingPerson } from '../../models/ICreatingPerson';
import { IPerson } from '../../models/IPerson';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  personForm!: FormGroup;
  subs = new SubSink();
  loading: boolean = false;

  constructor(private fb : FormBuilder,
    private toastr: ToastrService,
    private router: Router,    
    private _personService: PersonService) { }

  ngOnInit(): void {
    this.personFormInit();
  }

  personFormInit() {
    this.personForm = this.fb.group(
      {
        name: ["", [Validators.required]],
        country: ["", [Validators.required] ],
        email: ["", [Validators.required,Validators.email] ],
        avatar: ["", [Validators.required] ],
        dob: ["", [Validators.required] ]
      }
    );
  }

  cancel() {
    this.router.navigateByUrl("/persons/list");
  }

  submit(): void {

    this.loading = true;

    if(this.personForm.valid){
      let form = this.personForm.controls;

      let model: ICreatingPerson = {
        name: form['name'].value.toString(),
        email: form['email'].value.toString(),
        dob: form['dob'].value.toString(),
        country: form['country'].value.toString(),
        avatar: form['avatar'].value.toString(),
      };      
      
      this.subs.add(this._personService.postPersons(model).subscribe({
        next: (d) => {},
        error: (err) => { this.loading = false; },
        complete: () => {
           this.loading = false;
           this.cancel();
          }
      }));      

    } else {
      this.loading = false;
      this.personForm.markAllAsTouched();      
    }
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
