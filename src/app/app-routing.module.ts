import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreatePersonComponent } from "./components/create-person/create-person.component";
import { EditPersonComponent } from "./components/edit-person/edit-person.component";
import { PersonComponent } from "./components/person/person.component";
const routes: Routes = [
    { path: "", redirectTo: '/persons/list', pathMatch: 'full'},
    {
        path: "persons/list",
        //canActivate: [AuthGuard],
        component: PersonComponent,
    },
    {
        path: "persons/create",
        //canActivate: [AuthGuard],
        component: CreatePersonComponent,
    },
    {
        path: "persons/edit/:id",
        //canActivate: [AuthGuard],
        component: EditPersonComponent,
    },
    { path: '**', redirectTo: '/persons/list' } // redirect for it if any incorrect url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
