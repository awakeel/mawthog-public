import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
