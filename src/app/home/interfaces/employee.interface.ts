import { DynamicFormConfig } from '../../shared/components/dynamic-form/models/dynamic-form-config.model';

export interface IAddres {
  Street: string;
  Number: number;
  State: string;
  City: string;
  Country: string;
}

export interface IEmployee {
  [key: string]: any;
  Id: number;
  Age: number;
  Name: string;
  Position: string;
  Address?: IAddres;
}
