import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('hello') hello: TemplateRef<any>;

  dataArray = ['Value 1', 'Value 2', 'Value 3'];
  dataObject = {
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3'
  };

  constructor(
    private containerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.containerRef.createEmbeddedView(this.hello, {user: 'Jimmy Page 1', $implicit: 'Good luck, '}, 5);
    setTimeout(() => {
      this.containerRef.remove(5);
    }, 5000);
  }

  addToArray() {
    this.dataArray.push(String(Math.random()));
  }

  changeArray() {
    this.dataArray[0] = String(Math.random());
  }

  addToObject() {
    console.log('adding');
    this.dataObject[String(Math.random())] = String(Math.random());
  }

  changeObject() {
    console.log('changing');
    this.dataObject['key1'] = String(Math.random());
  }

}
