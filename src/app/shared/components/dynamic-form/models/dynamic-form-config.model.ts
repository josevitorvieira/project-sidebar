import { FormGroup, ValidatorFn } from '@angular/forms';

export type Fields = 'input' | 'select';

export type TypeControl = {
  field: Fields;
  typeField?: string;
};

export interface ISelectOptions {
  label: string;
  value: number;
}

export type DynamicFormConfig = {
  type?: TypeControl;
  label?: string;
  name: string;
  initialValue?: any;
  placeholder?: string;
  disabled: boolean;
  options?: Array<ISelectOptions>;
  validation?: Array<ValidatorFn>;
  subParams?: Array<DynamicFormConfig>;
};

export interface IDynamicControl {
  config: DynamicFormConfig;
  form: FormGroup;
}
