import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //i didn't set the prefix
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>`,

    styleUrls: ['app.component.css']
}) //verify that it is part of this module
//part of the routing, creating of home menu
//router outlet tells where to go

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}