// import Component decortor
import { Component } from '@angular/core';

// component definition
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

// export class
export default class HeaderComponent {
  // public atritubes
  title: string = 'Angular 8';

  username : string = '';

  secondName: string = '';

  // private atritubes
  private message: string = 'Hello World';

  // get private atritube
  getMessage(): string {
    return this.message;
  }

  // property binding concept
  disabledButton: boolean = true;

  // event binding concept
  count: number = 0;

  handleClick = () => {
    this.count += 1;
  };

  // passed args to event binding
  changeName = (event: Event) => {
    // cast event to any type
    console.log((<HTMLInputElement>event.target).value);
    this.username = (<HTMLInputElement>event.target).value;
  };

  sendData = () => {
    const user : object = {
      name: this.username,
      secondName: this.secondName,
    };
    console.log(user);
  };

  // calculator excercise

  numberOne : number = 0;

  numberTwo : number = 0;

  result : number = 0;

  sum = () => {
    this.result = this.numberOne + this.numberTwo;
  };

  // Directives
  //* ngIf directive Concept

  changeMessage : boolean = false;

  conditionalMessage : string = 'Hello World';

  changeConditionalMessage = () => {
    this.changeMessage = !this.changeMessage;
  };

  // *ngFor directive Concept
}
