import { Component} from '@angular/core';
import { PersonService } from './persons.sevice';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  ename='';
  constructor(private prService:PersonService){}
  onCreatePerson(){
    this.prService.addPerson(this.ename);
    this.ename='';
  }
 }
