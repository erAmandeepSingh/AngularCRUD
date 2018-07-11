import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import {HttpModule} from '@angular/http'
import {ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
