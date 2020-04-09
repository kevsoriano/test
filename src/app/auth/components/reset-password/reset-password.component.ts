import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3 mt-4">
        <h3>Reset Password</h3>
        <form>
          <div class="form-group">
            <label for="resetPasswordEmail">Email</label>
            <input type="email" class="form-control" id="resetPasswordEmail" placeholder="Enter email">
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
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
