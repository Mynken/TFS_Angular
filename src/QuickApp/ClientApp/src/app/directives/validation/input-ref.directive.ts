import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[inputRef]'
})
export class InputRefDirective {

    constructor(private formControl: NgControl) {
    }

    get hasError(): any {
        return this.formControl.dirty && this.formControl.invalid;
    }

    get errors(): any {
        if (this.hasError && this.formControl.errors) {
            return this.formControl.errors;
        }
        return '';
    }
}
