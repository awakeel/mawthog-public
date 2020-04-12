import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Car } from "../models/car";
import { Observable } from "rxjs";

@Injectable()
export class CarService extends EntityCollectionServiceBase<Car> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Car", serviceElementsFactory);
  }
}
