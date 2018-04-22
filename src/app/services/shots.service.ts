import {Injectable} from '@angular/core';

@Injectable()
export class ShotsService {


  constructor() {
  }

  getShots() {
    console.log('real service');
  }

}
