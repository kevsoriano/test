import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Customer Details</h2>

<hr/>
<div *ngIf="employee">
  <div>
    <label><b>Name: </b></label> {{employee.username}}
  </div>
</div>

<br>
<br>
<button (click)="list()" class="btn btn-primary">Back to Employee List</button><br>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router, 
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['employees']);
  }
}
