import { Component, Input } from '@angular/core';
import {
  DynamicFormConfig,
  IDynamicControl,
} from '../../models/dynamic-form-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html',
  styleUrl: './dynamic-form-select.component.scss',
})
export class DynamicFormSelectComponent implements IDynamicControl {
  @Input() form!: FormGroup;

  config!: DynamicFormConfig;
}
