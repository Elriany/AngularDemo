import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiSettings } from '../ApiSettings';
import { Observable } from 'rxjs';
import { IPerson } from '../models/IPerson';
import { ICreatingPerson } from '../models/ICreatingPerson';
import { IUpdatingPerson } from '../models/IUpdatingPerson';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  private Url = ApiSettings._apiUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders({
      "User-Agent": "googlebot",
      "Content-Type": "application/json"
    });
    
  }

  getPersons(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.Url);
  }

  getPerson(id: number): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.Url}/${id}`);
  }

  postPersons(creatingPerson: ICreatingPerson): Observable<ICreatingPerson>{    
    return this.http.post<ICreatingPerson>(this.Url,creatingPerson);
  }

  putPerson(updatingPerson: IUpdatingPerson,personId: number): Observable<IUpdatingPerson> {
    return this.http.put<IUpdatingPerson>(`${this.Url}/${personId}`,updatingPerson);
  }
}
