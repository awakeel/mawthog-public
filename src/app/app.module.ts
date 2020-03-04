import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesRoutingModule } from './routes/routes-routing.module';

import { StartupService } from './services/startup.service';
import { BrowserModule } from '@angular/platform-browser';

const startupFactory = (startup: StartupService) => {
  return () => startup.load();
};

const APP_INIT = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: startupFactory,
    deps: [StartupService],
    multi: true
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    LayoutModule,
    RoutesRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [...APP_INIT],
  bootstrap: [AppComponent]
})
export class AppModule {}
