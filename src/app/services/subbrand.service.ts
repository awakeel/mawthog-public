import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  Logger,
} from "@ngrx/data";
import { Sub } from "../models/car";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class SubBrandService extends EntityCollectionServiceBase<Sub> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    logger: Logger
  ) {
    super("SubBrand", serviceElementsFactory);
    logger.log("Created custom sub EntityDataService");
  }
  /*getAll(brandId?): Observable<Sub[]> {
    if (brandId)
      return super.getAll().pipe(map((subs) => subs.map((sub) => sub.brandid == brandId)));
    else return super.getAll().pipe(map((subs) => subs.map((sub) => sub)));
  }


  private mapHero(sub: Sub): Sub {
    return { ...sub, dateLoaded: new Date() };
  }

  getAll(): Observable<Sub[]> {;

    return super.getAll().pipe(;

      tap((res) => {;

        console.log(res);
      }),;

      map((res: any) => res..map((res) => res));

    );
  };


  private mapCar(car: Car): Car {;
    console.log(car);
    return { ...car };
  };
  */
}
