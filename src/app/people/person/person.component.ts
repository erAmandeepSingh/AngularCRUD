import { Component, OnInit } from '@angular/core';
import {PersonService} from '../shared/person.service'
import {NgForm} from '@angular/forms'
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService : PersonService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form? : NgForm)
{
  if(form != null)
  form.reset();
  this.personService.selectedPerson=
  {
    ID: null,
    FirstName: '',
    LastName: '',
    Type: 'Supplier',
    Birthday: null,
    Email: '',
    Telephone: ''  
  }
}
onSubmit (form :NgForm)
{
  if(form.value.ID==null){
  this.personService.postPerson(form.value)
  .subscribe(data =>{
    this.resetForm(form);
    this.personService.getPersonList();
    this.toastr.success('The record submitted successfully','Person Register');
  })
}

else
{ this.personService.putPerson(form.value.ID, form.value)
  .subscribe(data => {
    this.resetForm(form);
    this.personService.getPersonList();
    this.toastr.info('Record Updated Successfully!', 'Person Register');
  });
}
}
}
