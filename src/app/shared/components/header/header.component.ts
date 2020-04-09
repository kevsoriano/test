import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="nav nav-pills flex-column flex-sm-row">
      <a class="flex-sm-fill text-sm-center nav-link active" [routerLink]="['']" routerLinkActive="active">Home</a>
      <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['login']" routerLinkActive="active" >Sign in</a>
      <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['register']" routerLinkActive="active">Register</a>
      <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['reset-password']" routerLinkActive="active">Reset password</a>
      <a class="flex-sm-fill text-sm-center nav-link" [routerLink]="['employees']" routerLinkActive="active">Employees</a>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
