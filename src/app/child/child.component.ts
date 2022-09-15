import { Component , Input } from '@angular/core';
import Person from '../persons/persons.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{
  //property binding come from parent component
  @Input() person : Person;

  }
