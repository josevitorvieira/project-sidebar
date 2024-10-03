import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormConfig } from './models/dynamic-form-config.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  @Input() config: any = null;
  @Output() save = new EventEmitter();
  form = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  // createForm() {
  //   this.config.forEach((control: any) =>
  //     this.form.addControl(
  //       control.name,
  //       new FormControl(control.initialValue, control.validation)
  //     )
  //   );
  // }

  createForm() {
    this.config.forEach((control: DynamicFormConfig) => {
      if (control.subParams) {
        const group = new FormGroup({});
        control.subParams.forEach((subControl: DynamicFormConfig) => {
          group.addControl(
            subControl.name,
            new FormControl(subControl.initialValue, subControl.validation)
          );
        });

        this.form.addControl(control.name, group);
      } else {
        this.form.addControl(
          control.name,
          new FormControl(control.initialValue, control.validation)
        );
      }
    });

    console.log('Form: ', this.form);
  }

  // private createForm(config: any): FormGroup {
  //   const group: any = {};

  //   Object.keys(config).forEach(key => {
  //     if (typeof config[key] === 'object' && config[key] !== null && !Array.isArray(config[key])) {
  //       group[key] = this.createForm(config);
  //     } else {
  //       group[key] = new FormControl(config[key]);
  //     }
  //   });

  //   return this.fb.group(group);
  // }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.markAsPristine();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
