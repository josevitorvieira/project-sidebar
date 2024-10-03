import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormInputModule } from './components/dynamic-form-input/dynamic-form-input.module';
import { DynamicFormSelectComponent } from './components/dynamic-form-select/dynamic-form-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormSelectModule } from './components/dynamic-form-select/dynamic-form-select.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFieldDirective],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    DynamicFormInputModule,
    DynamicFormSelectModule,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
