import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  facebookToken: string;
  userData: any;

  ngOnInit() {
    this.facebookToken = this.route.snapshot.fragment.match(/access_token=(\w+?)&/)[1];

    const params = new HttpParams()
      .set('access_token', this.facebookToken)
      .set('fields', 'picture')
      .set('format', 'json');
    this.userData = this.http.get('https://graph.facebook.com/v2.10/me/photos', {params});
  }

}
