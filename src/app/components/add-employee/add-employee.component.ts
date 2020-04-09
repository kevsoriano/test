import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  template: `
    <h3>Create Employee</h3>
      <div [hidden]="submitted" style="width: 400px;">
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Username</label>
            <input type="text" class="form-control" id="username" required [(ngModel)]="employee.username" name="username">
          </div>

          <div class="form-group">
            <label for="name">Password</label>
            <input type="text" class="form-control" id="password" required [(ngModel)]="employee.password" name="password">
          </div>

          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>

      <div [hidden]="!submitted">
        <h4>You submitted successfully!</h4>
        <!-- <button class="btn btn-success" (click)="newEmployee()">Add</button> -->
      </div>
  `,
  styles: []
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.addEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
