import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
  HttpResponseBase,
  HttpClient,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";

const CODEMESSAGE = {
  200: "200",
  201: "201",
  202: "202",
  204: "204",
  400: "400",
  401: "401",
  403: "403",
  404: "404",
  406: "406",
  410: "410",
  422: "422",
  500: "500",
  502: "502",
  503: "503",
  504: "504",
};

@Injectable({ providedIn: "root" })
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private httpClient: HttpClient) {}

  /*private get notification(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }*/

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private checkStatus(ev: HttpResponseBase) {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return;
    }

    const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    //this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
  }

  private handleData(ev: HttpResponseBase): Observable<any> {
    console.log(ev);
    if (ev.status > 0) {
      this.injector.get(this.httpClient).end();
    }
    this.checkStatus(ev);
    switch (ev.status) {
      case 200:
        break;
      case 401:
        // (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).clear();
        //this.goTo("/passport/login");
        break;
      case 403:
      case 404:
      case 500:
        console.warn("Go to", ev);
        //this.goTo(`/exception/${ev.status}`);
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn("warn", ev);
        }
        break;
    }
    if (ev instanceof HttpErrorResponse) {
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = req.url;
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      // url = environment.SERVER_URL + url;
    }

    const newReq = req.clone({ url });
    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        if (event instanceof HttpResponseBase) return this.handleData(event);
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err))
    );
  }
}
