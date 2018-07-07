import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'fsw-textarea',
  templateUrl: './fsw-textarea.component.html',
  styleUrls: ['./fsw-textarea.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    }
  ]
})

export class FswTextareaComponent {

  @Input() placeholder: string;
  @Input() name: string;
  @Input() validations: any;
  @Input() hasError: boolean;
  @Input() icon = 'bars';
  @Input() label: string;
  @Input() rows = 5;
  @Input() cols = 40;
  @Input() maxlength = 1000;

  @Input()
  get model(): any {
    return this.modelValue;
  }
  set model(val: any) {
    this.modelValue = val;
    this.modelChange.emit(val);
  }

  @Output()
  modelChange: EventEmitter<any> = new EventEmitter<any>();
  protected modelValue: any;
  constructor() { }

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
