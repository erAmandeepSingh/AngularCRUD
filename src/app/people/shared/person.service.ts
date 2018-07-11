import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import {map} from "rxjs/operators";
import { Person } from './person.model';
import { Observable, Subject, pipe } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class PersonService {
selectedPerson : Person;
personList : Person[];
  constructor(private http : Http ) { }
  postPerson(per : Person)
  {
    var body = JSON.stringify(per);
    delete per.ID;
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:56740/api/people',body, requestOptions).map(x =>x.json());
  }
  getPersonList()
  {
    this.http.get('http://localhost:56740/api/people')
    .map((data : Response) =>{
      return data.json() as Person[];
    }).toPromise().then(x => {
      this.personList = x;
    })
  }
  putPerson(id, per) {
    var body = JSON.stringify(per);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:56740/api/people/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 deletePerson(id: number) {
    
  return this.http.delete('http://localhost:56740/api/people/' + id).map(res => res.json());
  }
}
