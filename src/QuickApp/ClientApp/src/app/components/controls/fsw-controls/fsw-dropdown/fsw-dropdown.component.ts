import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'fsw-dropdown',
  templateUrl: './fsw-dropdown.component.html',
  styleUrls: ['./fsw-dropdown.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    }
  ]
})

export class FswDropdownComponent {

  @Input() placeholder: string;
  @Input() name: string;
  @Input() validations: any;
  @Input() hasError: boolean;
  @Input() icon = 'bars';
  @Input() label: string;
  @Input() options: SelectItem[];

  @Input()
  get model(): SelectItem {
    return this.modelValue;
  }
  set model(val: SelectItem) {
    this.modelValue = val;
    this.modelChange.emit(val);
  }

  @Output()
  modelChange: EventEmitter<SelectItem> = new EventEmitter<SelectItem>();
  protected modelValue: SelectItem;

  errorMessage(): any {
    let message = '';
    if (this.validations) {
        if (this.validations.required && this.hasError) {
            message = 'Required';
        } else if (this.validations.custom && this.hasError) {
            message = this.validations.custom;
        }
    }
    return message;
  }
}
