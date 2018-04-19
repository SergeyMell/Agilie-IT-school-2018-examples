import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  shots = [
    {
      'id': 450,
      'title': 'iPhone X - Todo Concept',
      'description': 'Hi dribbblers,I came up new prototype of todo concept for iPhone X.Check the 60fps motion in attached file.And iPhone X mockup is here.',
      'link': 'https://dribbble.com/shots/3812962-iPhone-X-Todo-Concept',
      'avatar': 'http://api.mobile.design/uploads/shots/239d30d434bb80223407f9e375a64e6790bd9234.?1505722325',
      'thumbnail': 'http://api.mobile.design/uploads/shots/d56fdb9cbc55de885536dea76df3d3647c8b830b.?1505722325',
      'platforms': 'iOS',
      'avatar_content_type': 'image/gif'
    },
    {
      'id': 449,
      'title': 'Language Learning App',
      'description': 'A quick concept work for a language learning app. Tried to follow the trendy style by @Wojciech Zieliński I really loved the simplicity of your kit. :D See the full views attached.',
      'link': 'https://dribbble.com/shots/3805396-Language-Learning-App',
      'avatar': 'http://api.mobile.design/uploads/shots/c294579ea6ee0488da76711f937bff6674bfab3d.?1505468972',
      'thumbnail': 'http://api.mobile.design/uploads/shots/0c32838627ddbbf2253c79e9dcc0ce757da5f19a.?1505468972',
      'platforms': 'iOS, Android',
      'avatar_content_type': 'image/png'
    }
  ];


}
