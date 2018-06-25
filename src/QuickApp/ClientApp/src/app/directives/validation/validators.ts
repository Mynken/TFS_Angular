import { ValidatorFn, AbstractControl } from '@angular/forms';

export function inputRangeValidator(): ValidatorFn {
    const pattern: RegExp = /^[\w\.\$@\*\!]{2,30}$/;
    return (control: AbstractControl): { [key: string]: any } => {
        if (!(control.dirty || control.touched)) {
            return null;
        } else {
            return pattern.test(control.value) ? null : {custom: `error`};
        }
    };
}

export function phoneValidator(): ValidatorFn {
    // tslint:disable-next-line:max-line-length
    const pattern: RegExp = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
    return (control: AbstractControl): { [key: string]: any } => {
        if (!(control.dirty || control.touched)) {
            return null;
        } else {
            return pattern.test(control.value) ? null : {custom: `Invalid phone number`};
        }
    };
}

export function emailValidator(): ValidatorFn {
    // tslint:disable-next-line:max-line-length
    const pattern: RegExp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return (control: AbstractControl): { [key: string]: any } => {
        if (!(control.dirty || control.touched)) {
            return null;
        } else {
            return pattern.test(control.value) ? null : {custom: `Invalid email`};
        }
    };
}



// export function contactsValidator(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } => {
//         if (!(control.dirty || control.touched)) {
//             return null;
//         } else {
//             return {custom: `error123`};
//         }
//     };
// }
