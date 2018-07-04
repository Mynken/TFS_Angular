import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../models/enums';


@Pipe({
    name: 'transformStatus'
})
export class TransformStatus implements PipeTransform {

    public statuses: { name: string, value: number }[] = [];
    constructor() {
        this.statuses.push( {name: 'New', value: Status.New},
                            {name: 'InWork', value: Status.InWork},
                            {name: 'Finished', value: Status.Finished});
    }

    transform(value: number): string {
         return this.statuses.find(x => x.value === value).name;
    }
}
