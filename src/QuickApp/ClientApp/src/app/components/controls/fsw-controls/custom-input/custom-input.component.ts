import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { InputRefDirective } from '../../../../directives/validation/input-ref.directive';

@Component({
    selector: 'custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
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
