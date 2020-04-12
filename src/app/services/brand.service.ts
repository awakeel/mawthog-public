import { Brand } from "src/app/models/car";
import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  Logger,
} from "@ngrx/data";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class BrandService extends EntityCollectionServiceBase<Brand> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    logger: Logger
  ) {
    super("Brand", serviceElementsFactory);
    logger.log("Created custom Brand EntityDataService");
  }
  /*
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
