import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, group, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger('dropdownToggling', [
      state('closed', style({})),
      state('opened', style({})),
      transition('closed => opened', [
        query('.dropdown-item', style({
          transform: 'translateX(-100px)',
          opacity: 0
        })),
        query('.dropdown-item', stagger('500ms', [
          group([
            animate('500ms', style({transform: 'translateX(0)'})),
            animate('1000ms', style({opacity: 1})),
          ])
        ]))
      ])
    ])
  ]
})
export class DropdownComponent {

  values = ['dashboard', 'profile', 'settings'];
  state = 'closed';

  @Input() dropdownTitle;

  @Output() checkedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  toggleDropdown() {
    this.state = this.state === 'closed' ? 'opened' : 'closed';
  }

  itemClicked(value) {
    this.checkedValue.emit(value);
  }

}
