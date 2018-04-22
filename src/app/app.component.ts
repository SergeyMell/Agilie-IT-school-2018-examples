import {Component, HostListener, OnInit} from '@angular/core';
import {ShotsService} from './services/shots.service';
import {FakeShotsService} from './services/fake_shots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: ShotsService, useClass: FakeShotsService
  }]
})
export class AppComponent implements OnInit {
  title = 'app';

  shots;

  constructor(private shotService: ShotsService) {
  }

  ngOnInit() {
    this.shots = this.shotService.getShots();
  }

  // @HostListener('window:scroll', ['$event'])
  // userScrolled(event) {
  //   console.log('user scrolled');
  //   console.log(event);
  // }

}
