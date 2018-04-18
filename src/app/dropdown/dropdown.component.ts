import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  values = ['dashboard', 'profile', 'settings'];
  expanded: Boolean = false;
  @Input() dropdownTitle;

  @Output() checkedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  toggleDropdown() {
    this.expanded = !this.expanded;
  }

  itemClicked(value) {
    this.checkedValue.emit(value);
  }

}
