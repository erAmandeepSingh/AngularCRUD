import { Component, OnInit } from '@angular/core';
 
import { PersonService } from '../shared/person.service'
import { Person } from '../shared/person.model';
import { ToastrService } from 'ngx-toastr';    
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 
  constructor(private personService: PersonService,private toastr : ToastrService) { }
 
  ngOnInit() {
    this.personService.getPersonList();
  }
 
  showForEdit(per: Person) {
    this.personService.selectedPerson = Object.assign({}, per);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.personService.deletePerson(id)
      .subscribe(x => {
        this.personService.getPersonList();
        this.toastr.warning("Deleted Successfully","Person Register");
      })
    }
  }
}