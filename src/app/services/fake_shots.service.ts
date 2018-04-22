import {Injectable} from '@angular/core';
import * as shots from './shots.json';

@Injectable()
export class FakeShotsService {

  loadedShots = [];

  constructor() {
    this.loadedShots = shots.map(function (shot) {
      return new Shot(shot);
    });
  }

  getShots() {
    return this.loadedShots;
  }
}

class Shot {

  private shot = {};

  constructor(shotData) {
    this.shot = shotData;
  }

  customAction() {
    console.log('I am some action');
    console.log(`Shot ID = ${this.shot['id']}`);
  }
}
