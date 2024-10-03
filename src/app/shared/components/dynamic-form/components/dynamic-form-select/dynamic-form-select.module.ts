import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormSelectComponent } from './dynamic-form-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [DynamicFormSelectComponent],
  imports: [FormsModule, CommonModule, DropdownModule, ReactiveFormsModule],
  exports: [DynamicFormSelectComponent],
})
export class DynamicFormSelectModule {}
