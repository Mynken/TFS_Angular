import { Component, OnInit, Input, Output, EventEmitter, forwardRef, Optional, Host, SkipSelf } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ControlContainer, FormGroup, FormControl } from '@angular/forms';
import { Validation } from '../../../../models/enums';

@Component({
  selector: 'fsw-input-text',
  templateUrl: './fsw-input-text.component.html',
  styleUrls: ['./fsw-input-text.component.css']
})
export class FswInputTextComponent implements OnInit {

    public validClass: boolean;
    public viewService: { name: string, valid: boolean };

    @Input() pKeyFilter = 'alphanum';
    @Input() placeholder: string;
    @Input() name: string;
    @Input() id: string;
    @Input() size = 30;
    @Input() options: string;
    @Input() pTooltip: string;
    @Input() tooltipEvent: string;
    @Input() style: string;
    @Input() tooltipPosition = 'right';
    @Input() validationInfo: string;
    @Input() validationParams: any;

    @Input()
    get validation(): any {
      return this.valid;
    }
    set validation(val: any) {
      this.valid = val;
      this.notifyParent.emit(val);
    }

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

    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    protected valid: any;
    sendNotification(): void {
        console.log(this.validationParams);
        this.validClass = true;
        this.viewService = {name: this.options, valid: true};
        this.notifyParent.emit(this.viewService);
    }

  constructor() { }

  ngOnInit(): void {
      this.validClass = undefined;
      console.log(this.validClass);
  }

//   validClass(): boolean {
//       return true;
//   }
}


// visible: () => true,
// editable: () => true,


// required: () => false,
// hasError: () => false,
// Required = 2000,
// MinLength = 2001,
// MaxLength = 2002,
// Custom = 2003
