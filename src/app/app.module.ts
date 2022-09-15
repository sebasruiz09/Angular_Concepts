import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import HeaderComponent from 'src/Components/header/header.component';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';

@NgModule({
  // components declaration
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonsComponent,
    ChildComponent,
    FormComponent,

  ],
  // modules declaration
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
