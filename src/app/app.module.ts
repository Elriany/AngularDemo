import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonService } from './services/person.service';
import { CustomCardComponent } from './shared/components/custom-card/custom-card.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { TimeAgoPipe } from './shared/Pipes/time-ago.pipe';
import { NoAvailabaleDataComponent } from './shared/components/no-availabale-data/no-availabale-data.component';
import { ErrorPopUpComponent } from './shared/components/error-pop-up/error-pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SpinnerComponent,
    CustomCardComponent,
    TimeAgoPipe,
    NoAvailabaleDataComponent,
    ErrorPopUpComponent,
    CreatePersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
       positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
  ],
  providers: [    DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
