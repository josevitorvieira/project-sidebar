import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormConfig } from './models/dynamic-form-config.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() config: DynamicFormConfig[] = [];
  @Output() save = new EventEmitter();
  form = new FormGroup({});

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.config.forEach((control) =>
      this.form.addControl(
        control.name,
        new FormControl(control.initialValue, control.validation)
      )
    );

    console.log(this.form.value);
    
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.markAsPristine();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
