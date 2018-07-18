import { Pipe, PipeTransform } from '@angular/core';
import { Status, BugStatus } from '../models/enums';


@Pipe({
    name: 'transformStatus'
})
export class TransformStatus implements PipeTransform {

    public statuses: { name: string, value: number }[] = [];
    constructor() {
        this.statuses.push( {name: 'New', value: Status.New},
                            {name: 'InWork', value: Status.InWork},
                            {name: 'Finished', value: Status.Finished},
                            {name: 'Active', value: BugStatus.Active},
                            {name: 'Closed', value: BugStatus.Closed},
                            {name: 'New', value: BugStatus.New},
                            {name: 'Resolved', value: BugStatus.Resolved});
    }

    transform(value: number): string {
         return this.statuses.find(x => x.value === value).name;
    }
}
