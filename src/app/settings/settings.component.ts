import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  dataValue = 'Test';

  constructor() {
  }

  ngOnInit() {
  }

}
