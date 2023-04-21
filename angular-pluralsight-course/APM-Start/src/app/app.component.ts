import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //i didn't set the prefix
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>`
}) //verify that it is part of this module

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}