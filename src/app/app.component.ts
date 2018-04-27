import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: any;

  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => console.log(res));
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => console.log(res));
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => console.log(res));
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => console.log(res));
  }

  handleDropdownSelection(value) {
    this.title = value;
  }
}
