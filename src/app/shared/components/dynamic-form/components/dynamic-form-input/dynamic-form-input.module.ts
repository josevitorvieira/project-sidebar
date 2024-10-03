import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormInputComponent } from './dynamic-form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [DynamicFormInputComponent],
  imports: [FormsModule, CommonModule, InputTextModule, ReactiveFormsModule],
  exports: [DynamicFormInputComponent],
})
export class DynamicFormInputModule {}
