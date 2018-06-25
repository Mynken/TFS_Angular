import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { InputRefDirective } from '../../../../directives/validation/input-ref.directive';

@Component({
    selector: 'fsw-custom-input',
    templateUrl: './fsw-custom-input.component.html',
    styleUrls: ['./fsw-custom-input.component.css']
})
export class FSWCustomInputComponent implements OnInit {
    @Input() label: string;
    @Input() validations: { [index: string]: string };
    @Input() info: string;

    @ContentChild(InputRefDirective) input: InputRefDirective;

    get isError(): any {
        return this.input.hasError;
    }

    get errorMessages(): any {
        const errors = this.input.errors;
        const messages = [];
        const keys = Object.keys(this.validations);

        keys.forEach(key => {
            if (errors[key]) {
                messages.push(this.validations[key]);
            }
        });
        return messages;
    }

    ngOnInit(): void { }

    constructor() { }
}
