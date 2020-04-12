import { SubBrandService } from "./../services/subbrand.service";
import { entityConfig } from "./entity-metadata";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, Action } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
//import { SubBrandService } from "../services/subbrand.service";
import { CarService } from "../services/car.service";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";

const NGRX_STORE_CONFIGURATION = {};

const REGISTERED_EFFECTS = [];

const NGRX_DATA_SERVICE_CONFIGURATION = {
  root: "http://localhost:3000/",
};

const Services = [CarService, SubBrandService];
@NgModule({
  imports: [
    CommonModule,
    ///StoreModule.forRoot(NGRX_STORE_CONFIGURATION),
    EffectsModule.forRoot(REGISTERED_EFFECTS),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: NGRX_DATA_SERVICE_CONFIGURATION,
    },
  ],
})
export class AppStoreModule {}
