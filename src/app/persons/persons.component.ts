import { Component } from '@angular/core';
import Person from './persons.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent {
  title : string = 'persons list ';

  persons : Person[] = [
  ];

  name : string = '';

  lastName : string = '';

  addPerson = () => {
    this.persons.push(new Person(this.name, this.lastName));
  };
}
