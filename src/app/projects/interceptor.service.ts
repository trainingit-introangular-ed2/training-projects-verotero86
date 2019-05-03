import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LogsNotificationsStoreService } from './logs-notifications-store.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private losgNotificationsStore: LogsNotificationsStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'ÉXITO';
          }
        },
        error => (status = 'FALLO')
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message =
          'Se hace una llamada de tipo ' +
          req.method +
          ' en la url ' +
          req.urlWithParams +
          ', el resultado es: ' +
          status +
          ' en ' +
          elapsedTime +
          'ms';
        console.log(message);
        this.losgNotificationsStore.dispatch(message);
      })
    );
  }
}
