import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonService } from './persons.sevice';

@Component({
  selector:"app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"]
})

export class PersonsComponent implements OnInit, OnDestroy{
  personList: string[]=[];
  fetching_data=false;
  private personChangedSub!: Subscription;
  constructor(private pService:PersonService) {
  // this.personList=pService.persons;
  }
  ngOnInit(){
    this.personChangedSub=this.pService.personsChanged.subscribe(persons => {
      this.personList=persons;
      this.fetching_data=false;
    });
    this.fetching_data=true;
    this.pService.fetchPersons();
  }
  onRemovePerson(name:string){
      this.pService.removePerson(name);
  }
  ngOnDestroy(){
      this.personChangedSub.unsubscribe();
  }
}

