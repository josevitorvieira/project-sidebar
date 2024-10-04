import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import {
  DynamicFormConfig,
  IDynamicControl,
} from '../../models/dynamic-form-config.model';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrl: './dynamic-form-input.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class DynamicFormInputComponent implements IDynamicControl {
  @Input() form!: FormGroup;
  config!: DynamicFormConfig;
}
