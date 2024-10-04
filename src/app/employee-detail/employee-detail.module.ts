import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeeDetailComponent],
  imports: [CommonModule, SharedModule],
})
export class EmployeeDetailModule {}
