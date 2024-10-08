import {
  Directive,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  DynamicFormConfig,
  Fields,
  IDynamicControl,
} from '../models/dynamic-form-config.model';
import { DynamicFormInputComponent } from '../components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from '../components/dynamic-form-select/dynamic-form-select.component';
import { FormGroup } from '@angular/forms';

type ComponentFields = {
  [Property in Fields]: Type<IDynamicControl>;
};

const components: ComponentFields = {
  input: DynamicFormInputComponent,
  select: DynamicFormSelectComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input('appDynamicField') config!: DynamicFormConfig;
  @Input() form!: FormGroup;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.generateComponent();
  }

  private generateComponent(): void {
    if (this.config?.type?.field) {
      const component = components[this.config?.type?.field];
      const componentRef = this.viewContainerRef.createComponent(component);
      componentRef.instance.config = this.config;
      componentRef.instance.form = this.form;
    }
  }
}
