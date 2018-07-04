import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fsw-button',
  templateUrl: './fsw-button.component.html',
  styleUrls: ['./fsw-button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FswButtonComponent implements OnInit {

    @Input() type = 'button';
    @Input() disabled = false;
    @Input() label: string;
    @Input() icon: string;
    @Input() severityLevel = 'primary';
    @Output() onClick = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}

    handleClick = () => {
      this.onClick.emit();
    }

  }
