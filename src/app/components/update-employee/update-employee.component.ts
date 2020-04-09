import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-update-employee',
  template: `
    <h3>Update Employees</h3>
    <div [hidden]="submitted" style="width: 400px;">
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="username" required [(ngModel)]="employee.username" name="username">
        </div>

        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  `,
  styles: []
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
