import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h2>Employee List</h2>
        <button (click)="gotoAdd()" class="btn btn-submit">Add Employee</button>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let employee of employees | async">
              <td>{{employee.id}}</td>
              <td>{{employee.username}}</td>
              <td>
                <button (click)="deleteEmployee(employee.id)" class="btn btn-danger">Delete</button>
                <button (click)="employeeDetails(employee.id)" class="btn btn-info" style="margin-left: 10px">Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      })
  }

  gotoAdd() {
    this.router.navigate(['create']);
  }
}
