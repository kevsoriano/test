import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3 mt-4">
        <h3>Register</h3>
        <form #f="ngForm" (ngSubmit)="onSubmit(f)" class="needs-validation" novalidate>
          <div class="form-group">
            <label for="registerUsername">Username</label>
            <input type="text" name="username" ngModel required #username="ngModel"
            class="form-control" id="registerUsername" placeholder="Enter username">
          </div>
          <div class="form-group">
            <label for="registerEmail">Email Address</label>
            <input type="email" name="email" ngModel required #email="ngModel"
            class="form-control" id="registerEmail" placeholder="Enter email address">
          </div>
          <div class="form-group">
            <label for="registerPassword">Password</label>
            <input type="password" name="password" ngModel required #password="ngModel"
            class="form-control" id="registerPassword" placeholder="Password">
          </div>
          <div class="form-check">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    // Create observer object
    const registerObserver = {
      next: x => console.log('User created'),
      error: err => console.error(err)
    };

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.authService.register(f.value).subscribe(registerObserver);
  }
}
