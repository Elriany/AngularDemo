import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { IPerson } from '../../models/IPerson';
import { IUpdatingPerson } from '../../models/IUpdatingPerson';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  personEditForm!: FormGroup;
  subs = new SubSink();
  loading: boolean = true;
  person!: IPerson;
  personId!: number;

  constructor(private fb : FormBuilder,
    private router: Router, 
    private activatedRoute: ActivatedRoute,   
    private _personService: PersonService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.personFormInit();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.personId = Number(id);
    this.subs.add(this._personService.getPerson(this.personId).subscribe({
      next: (data) => { this.person = data; this.addValuesToForm();
      },
      error: (err) => { console.log(err); },
      complete: () => { this.loading = false;}
    }));      
  }

  personFormInit() {
    this.personEditForm = this.fb.group(
      {
        name: ["", [Validators.required]],
        country: ["", [Validators.required] ],
        email: ["", [Validators.required] ],
        avatar: ["", [Validators.required] ],
        dob: ["", [Validators.required] ]
      }
    );
  }

  addValuesToForm() {
    let date = new Date(this.person.dob);
    let dateOfBirth = this.datepipe.transform(date, 'yyyy-MM-dd');
    this.personEditForm.get("name")!.setValue(this.person.name!);
    this.personEditForm.get("country")!.setValue(this.person.country);
    this.personEditForm.get("email")!.setValue(this.person.email);
    this.personEditForm.get("avatar")!.setValue(this.person.avatar);
    this.personEditForm.get("dob")!.setValue(dateOfBirth);
  }

  submit(): void {

    this.loading = true;

    if(this.personEditForm.valid)
    {
      let form = this.personEditForm.controls;
      let model: IUpdatingPerson = {
        name: form['name'].value.toString(),
        email: form['email'].value.toString(),
        dob: form['dob'].value.toString(),
        country: form['country'].value.toString(),
        avatar: form['avatar'].value.toString(),
      };

      this.subs.add(this._personService.putPerson(model,this.personId).subscribe({
        next: (d) => {},
        error: (err) => { this.loading = false; },
        complete: () => {
           this.loading = false;
           this.cancel();
          }
      }));      

    } 
    else
    {
      this.loading = false;
      this.personEditForm.markAllAsTouched();      
    }
  }

  cancel() {
    this.router.navigateByUrl("/persons/list");
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
