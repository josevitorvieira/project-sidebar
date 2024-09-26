import { FormGroup } from '@angular/forms';
import { DynamicFormConfig } from '../models/dynamic-form-config.model';

export interface DynamicControl {
  config: DynamicFormConfig;
  form: FormGroup;
}
