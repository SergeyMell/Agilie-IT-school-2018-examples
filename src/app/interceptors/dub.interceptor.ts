import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

export class DubInterceptor implements HttpInterceptor {

  pendingRequests = {};

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    const hash = '' + req.method + req.headers + req.params + req.body;

    if (!this.pendingRequests[hash]) {
      this.pendingRequests[hash] = next.handle(req).toPromise();
    }
    return this.pendingRequests[hash];
  }

}
