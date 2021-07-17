import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})

export class PersonService {
  persons: string[]=[];
  personsChanged = new Subject<string[]>();

  constructor(private http:HttpClient) {}

  fetchPersons(){
    this.http
    .get<any>("https://swapi.dev/api/people")
    .pipe(map(data => {return data.results.map((content: { name: any; })=> content.name);}))
    .subscribe(resData => {this.personsChanged.next(resData)});
  }

  addPerson(name:string){
      this.persons.push(name);
      this.personsChanged.next(this.persons);
  }
  removePerson(name:string){
      this.persons=this.persons.filter(person => {
        return person!==name;
      });
      this.personsChanged.next(this.persons);
  }
}
