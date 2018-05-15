import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };

  dataIterable = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    [Symbol.iterator]() {
      let index = 0;
      const keys = Object.keys(this).filter(el => this.hasOwnProperty(el));
      return {
        next: () => {
          const value = this[keys[index]];
          const done = index >= keys.length;
          index++;
          return {value, done};
        }
      };
    }
  };

  constructor() {
    Object.prototype[Symbol.iterator] = function () {
      let index = 0;
      const keys = Object.keys(this).filter(el => this.hasOwnProperty(el));
      return {
        next: () => {
          const value = this[keys[index]];
          const done = index >= keys.length;
          index++;
          return {value, done};
        }
      };
    };
  }

  ngOnInit() {
  }

  toArray(object) {
    return Object.keys(object)
      .filter(el => object.hasOwnProperty(el));
  }

}
