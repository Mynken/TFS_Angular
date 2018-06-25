import { Component, OnInit, Input, Output, EventEmitter, forwardRef, Optional, Host, SkipSelf } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ControlContainer, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Validation } from '../../../../models/enums';

@Component({
  selector: 'fsw-input-text',
  templateUrl: './fsw-input-text.component.html',
  styleUrls: ['./fsw-input-text.component.css']
})
export class FswInputTextComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
