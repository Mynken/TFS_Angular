import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fsw-autocomplete',
  templateUrl: './fsw-autocomplete.component.html',
  styleUrls: ['./fsw-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FswAutocompleteComponent implements OnInit {

    @Input() searchMethod: string[];
    @Input() placeholder: string;
    @Input() emptyMessage: string;
    @Input() size = 30;
    @Input() dropdown = true;
    @Input()
    get model(): any {
      return this.modelValue;
    }
    set model(val: any) {
      this.modelValue = val;
      this.modelChange.emit(val);
    }

    @Output()
    modelChange: EventEmitter<string> = new EventEmitter<string>();
    protected modelValue: string;

    public suggestedValues: string[];

  constructor() { }

  ngOnInit(): void {
  }

  search = (event) => {
    const queryText = event.query && event.query.toLowerCase();
    this.suggestedValues =
    this.searchMethod.filter(x => x.toLowerCase().indexOf(queryText) >= 0 || x.toLowerCase().includes(queryText));
  }

  public onAutocompleteSelect = (value: string) => {
    this.modelChange.emit(value);
  }

  onFocus(): void {
    this.suggestedValues = this.searchMethod;
    console.log(this.suggestedValues);
  }

  public onClear = () => {
    this.model = null;
  }

}
