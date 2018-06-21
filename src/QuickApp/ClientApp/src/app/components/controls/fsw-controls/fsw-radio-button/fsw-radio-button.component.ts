import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fsw-radio-button',
  templateUrl: './fsw-radio-button.component.html',
  styleUrls: ['./fsw-radio-button.component.css']
})
export class FswRadioButtonComponent implements OnInit {

    @Input() label: string;
    @Input() value: string;
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
