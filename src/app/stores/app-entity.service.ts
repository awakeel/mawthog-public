import { Injectable } from "@angular/core";
import { EntityServicesElements, EntityServicesBase } from "@ngrx/data";

@Injectable()
export class AppEntityServices extends EntityServicesBase {
  constructor(entityServicesElements: EntityServicesElements) {
    super(entityServicesElements);
    //this.registerEntityCollectionServices([heroesService, villainsService]);
  }

  // ... Additional convenience members
}
