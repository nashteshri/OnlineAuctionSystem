import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { log } from 'console';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      
      
      //clone the request and modify it
      const modifiedReq = req.clone({
        headers: req.headers.set('authorization', token!)
      });

      //pasing the modiefied request to the next handler
      return next.handle(modifiedReq);
    }

    return next.handle(req);

  }
}
