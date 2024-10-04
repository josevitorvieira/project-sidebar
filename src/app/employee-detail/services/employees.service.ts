import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../consts/employees.const';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  public getEmployees(): Array<IEmployee> {
    return EMPLOYEES;
  }
}
