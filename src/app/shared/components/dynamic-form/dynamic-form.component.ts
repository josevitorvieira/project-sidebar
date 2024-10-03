import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DynamicFormConfig } from './models/dynamic-form-config.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IEmployee } from '../../../home/interfaces/employee.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnChanges {
  @Input() config: Array<DynamicFormConfig> = [];
  @Output() save: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({});

    this.config.forEach((controlConfig) => {
      if (controlConfig.subParams && !!controlConfig?.subParams?.length) {
        const subGroup = new FormGroup({});

        controlConfig.subParams.forEach((subControl) => {
          subGroup.addControl(
            subControl.name,
            new FormControl(
              { value: subControl.initialValue, disabled: subControl.disabled },
              subControl.validation
            )
          );
        });

        this.form.addControl(controlConfig.name, subGroup);
      } else {
        this.form.addControl(
          controlConfig.name,
          new FormControl(
            {
              value: controlConfig.initialValue,
              disabled: controlConfig.disabled,
            },
            controlConfig.validation
          )
        );
      }
    });
  }

  public submitForm(): void {
    this.save.emit(this.form.getRawValue());
  }
}
