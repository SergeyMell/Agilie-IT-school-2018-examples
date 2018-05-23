import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-form',
  templateUrl: './form-example.component.html',
  styles: [
    '.ng-valid {background-color: lightgreen}',
    '.ng-invalid {background-color: lightcoral}',
    '.ng-pending {background-color: peachpuff}'
  ]
})

export class FormExampleComponent {

  constructor(private http: HttpClient) {

  }

  myForm = new FormGroup({
    login: new FormControl('', [Validators.required], [this.validateLogin.bind(this)]),
    passwordGroup: new FormGroup({
      password: new FormControl('Pass', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required])
    }, [this.validatePasswords.bind(this)])
  });

  validatePasswords(control: AbstractControl) {
    control.password.value === control.password_confirmation.value
  }

  validateLogin(control: AbstractControl) {
    console.log('this');
    console.log(this);
    const params = new HttpParams().set('login', control.value);
    return this.http
      .get('http://winter-pine-4182.getsandbox.com/login', {params})
      .pipe(map((event) => {
        if (event['status'] === 'ok') {
          return null;
        } else {
          return {'loginInvalid': true};
        }
      }))
      .pipe(catchError(ev => of({'loginInvalid': true})));
  }

  register() {
    console.log('this.myForm');
    console.log('Valid:', this.myForm.valid);
    console.log('Errors:', this.myForm);
    console.log(this.myForm.value);
  }

}
