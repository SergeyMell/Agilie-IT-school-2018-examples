import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clone = req.clone({
      setParams: {'API_KEY': 'MY_CUSTOM_KEY'}
    });

    return next.handle(clone);
  }

}
