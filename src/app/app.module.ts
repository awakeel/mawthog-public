import { CardModule } from "primeng/card";
import { SubBrandService } from "./services/subbrand.service";
import { CarService } from "./services/car.service";
import { AppStoreModule } from "./stores/app.store.module";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
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
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";
import { entityConfig } from "./stores/entity-metadata";

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
const NGRX_DATA_SERVICE_CONFIGURATION = {
  root: "http://localhost:3000/",
};
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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    ...APP_INIT,
    // ...INTERCEPTOR_PROVIDES,

    {
      provide: DefaultDataServiceConfig,
      useValue: NGRX_DATA_SERVICE_CONFIGURATION,
    },
    SubBrandService,
    CarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
