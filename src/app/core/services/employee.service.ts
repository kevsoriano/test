import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this.http.get('${this.baseUrl}');
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}/${id}');
  }

  addEmployee(employee: Object): Observable<any> {
    return this.http.get('${this.baseUrl}', employee);
  }

  updateEmployee(id: number, value: any): Observable<any> {
    return this.http.get('${this.baseUrl}/${id}', value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}', { responseType: 'text'});
  }
}
