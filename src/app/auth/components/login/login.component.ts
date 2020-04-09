import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3 mt-4">
        <h3>Login</h3>
        <form #f="ngForm" (ngSubmit)="onSubmit(f)" class="needs-validation" novalidate>
          <div class="form-group">
            <label for="loginUsername">Username</label>
            <input type="text" name="username" ngModel required #username="ngModel"
            class="form-control" id="loginUsername" placeholder="Enter username">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <div class="valid-feedback">Looks good!</div>
            <!-- <p>Username value: {{ username.value }}</p>
            <p>Username valid: {{ username.valid }}</p>
            <p>Username dirty: {{ username.value }}</p>
            <p>Username touched: {{ username.valid }}</p> -->
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" name="password" ngModel required #password="ngModel"
            class="form-control" id="loginPassword" placeholder="Password">
            <!-- <p>Password value: {{ password.value }}</p>
            <p>Password valid: {{ password.valid }}</p>
            <p>Password dirty: {{ password.dirty }}</p>
            <p>Password touched: {{ password.touched }}</p> -->
          </div>
          <div class="form-check">
            <a [routerLink]="['reset-password']">Having trouble signing in?</a>
            <button type="submit" class="btn btn-primary" [disabled]="f.invalid">Submit</button>
          </div>
        </form>

        <!-- <p>Form value: {{ f.value | json }}</p>
        <p>Form valid: {{ f.valid }}</p> -->
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    // Create observer object
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.error(err)
    };

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.authService.login(f.value).subscribe(loginObserver);
  }
}
