import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [
    '.ng-valid {background-color: lightgreen}',
    '.ng-invalid {background-color: coral}',
    '.ng-pending {background-color: lightblue}',
  ]
})
export class SettingsComponent implements OnInit {

  myForm = new FormGroup({
    login: new FormControl('test',
      [Validators.required],
      [ctrl => this.validateLogin(ctrl)]),
    passGroup: new FormGroup({
      password: new FormControl('',
        [Validators.required]),
      passwordConfirmation: new FormControl('',
        [Validators.required])
    }, [this.validatePasswords.bind(this)])
  });

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  private validatePasswords(control: FormGroup) {
    if (control.controls.password.value ===
      control.controls.passwordConfirmation.value) {
      return null;
    } else {
      return {passwordMismatch: true};
    }
  }

  private validateLogin(control: AbstractControl) {
    const url = 'http://winter-pine-4182.getsandbox.com/login';
    const params = new HttpParams()
      .set('login', control.value);
    return this.http.get(url, {params})
      .pipe(map(event => {
        if (event['status'] === 'ok') {
          return null;
        } else {
          return {loginError: true};
        }
      }))
      .pipe(catchError(error => of({loginError: true})));
  }

  login() {
    console.log('Form:', this.myForm);
  }

}
