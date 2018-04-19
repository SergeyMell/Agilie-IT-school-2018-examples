import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shot-item',
  templateUrl: './shot-item.component.html',
  styleUrls: ['./shot-item.component.css']
})
export class ShotItemComponent implements OnInit {

  @Input('shot') shotItem;

  constructor() {
  }

  mouseInHandler(event, shot) {
    event.target.src = shot.avatar;
  }

  mouseOutHandler(event, shot) {
    event.target.src = shot.thumbnail;
  }

  ngOnInit() {
  }

}
