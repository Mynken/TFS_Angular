import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'fsw-input-text',
  templateUrl: './fsw-input-text.component.html',
  styleUrls: ['./fsw-input-text.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    }
  ]
})
export class FswInputTextComponent {

    @Input() pKeyFilter: RegExp = /.+/;
    @Input() placeholder: string;
    @Input() name: string;
    @Input() id: string;
    @Input() size = 40;
    @Input() options: string;
    @Input() pTooltip: string;
    @Input() tooltipEvent: string;
    @Input() style: string;
    @Input() tooltipPosition = 'right';
    @Input() validations: any;
    @Input() hasError: boolean;
    @Input() icon = 'bars';
    @Input() label: string;

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
