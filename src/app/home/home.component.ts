import { BASE_FORM_CONFIG } from './consts/employees.const';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormConfig } from '../shared/components/dynamic-form/models/dynamic-form-config.model';
import { PositionEnum } from '../shared/components/sidebar/enums/sidebar.enum';
import { EmployeesService } from './services/employees.service';
import { IColum } from '../shared/components/basic-table/interfaces/basic-table.interface';
import { COLUMS_EMPLOYEES_TABLE } from './consts/colums-employees.const';
import { IEmployee } from './interfaces/employee.interface';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('sideBar') sideBar!: SidebarComponent;

  private readonly NOT_FOUND_INDEX: number = -1;
  public readonly SIZE_SIDEBAR: string = '500px';
  public readonly CARD_TITLE: string = 'Funcionários Cadastrados';
  public readonly FORM_TITLE: string = 'Editar Funcionário';
  public readonly COLUMS_EMPLOYEES: Array<IColum> = COLUMS_EMPLOYEES_TABLE;

  public employees: Array<IEmployee> = [];
  public config: Array<DynamicFormConfig> = [];
  public sidebarPosition: PositionEnum = PositionEnum.Top;
  public baseForm: Array<DynamicFormConfig> = BASE_FORM_CONFIG;

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

    this.baseForm.forEach((item) => {
      const employeeValue = employee[item.name];

      if (!employeeValue) return;

      if (item.subParams && typeof employeeValue === 'object') {
        item.subParams.forEach((itemSubparam) => {
          itemSubparam.initialValue = employeeValue[itemSubparam.name];
        });
      } else {
        item.initialValue = employeeValue;
      }
    });

    this.config = this.baseForm;
    this.sideBar.OpenSidebar();
  }

  public updateEmployee(employeeData: IEmployee): void {
    const index: number = this.employees.findIndex(
      (employee) => employee.Id === employee.Id
    );

    if (index !== this.NOT_FOUND_INDEX) {
      this.employees[index] = employeeData;
    }

    this.sideBar.closeSidebar();
  }
}
