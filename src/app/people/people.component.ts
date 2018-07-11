import { Component, OnInit } from '@angular/core';
import {PersonService} from './shared/person.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers:[PersonService]

})
export class PeopleComponent implements OnInit {

  constructor(private personService : PersonService) { }

  ngOnInit() {
  }

}
