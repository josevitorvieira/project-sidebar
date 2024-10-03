import { Injectable } from '@angular/core';
import { employees } from '../consts/employees.const';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  public getEmployees(): Array<IEmployee> {
    return employees;
  }
}
