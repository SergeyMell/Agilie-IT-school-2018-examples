import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('hello') hello: TemplateRef<any>;

  constructor(
    private containerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.containerRef.createEmbeddedView(this.hello, {user: 'Jimmy Page 1', $implicit: 'Good luck, '}, 5);
    setTimeout(() => {
      this.containerRef.remove(5);
    }, 5000);
  }

}
