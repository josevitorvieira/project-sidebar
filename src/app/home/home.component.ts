import {
  baseFormConfig,
  employees,
  IBaseFormEmployeeConfig,
} from './consts/employees.const';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormConfig } from '../shared/components/dynamic-form/models/dynamic-form-config.model';
import { PositionEnum } from '../shared/components/sidebar/enums/sidebar.enum';
import { EmployeesService } from './services/employees.service';
import { IColum } from '../shared/components/basic-table/interfaces/basic-table.interface';
import { COLUMS_EMPLOYEES } from './consts/colums-employees.const';
import { IEmployee } from './interfaces/employee.interface';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('sideBar') sideBar!: SidebarComponent;

  public readonly SIZE_SIDEBAR: string = '500px';
  public readonly CARD_TITLE: string = 'Funcionários Cadastrados';
  public readonly COLUMS_EMPLOYEES: Array<IColum> = COLUMS_EMPLOYEES;

  public employees: Array<IEmployee> = [];
  public config: Array<DynamicFormConfig> = [];
  public sidebarPosition: PositionEnum = PositionEnum.Top;
  public baseForm: Array<DynamicFormConfig> = baseFormConfig;

  constructor(
    private employeesService: EmployeesService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employees = this.employeesService.getEmployees();
  }

  public setEmployeeFormConfig(employee: IEmployee): void {
    this.config = [];
    this.changeDetectorRef.detectChanges();

    Object.keys(employee).forEach((key) => {
      this.baseForm.forEach((item) => {
        if (item.name === key) {
          item.initialValue = employee[key];
        }
      });
    });

    this.config = this.baseForm;

    this.sideBar.OpenSidebar();
  }

  public updateEmployee(employeeData: IEmployee): void {
    this.employees.forEach((employee, index) => {
      if (employee.Id === employeeData.Id) {
        this.employees[index] = employeeData;
      }
    });
  }
}
