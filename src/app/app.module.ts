import { AppStoreModule } from "./stores/app.store.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";
import { RoutesRoutingModule } from "./routes/routes-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StartupService } from "./services/startup.service";
import { BrowserModule } from "@angular/platform-browser";

import { DefaultInterceptor } from "./core/default.interceptors";

const startupFactory = (startup: StartupService) => {
  return () => startup.load();
};

const APP_INIT = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: startupFactory,
    deps: [StartupService],
    multi: true,
  },
];

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    LayoutModule,
    RoutesRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    AppStoreModule,
  ],
  providers: [...APP_INIT],
  bootstrap: [AppComponent],
})
export class AppModule {}
