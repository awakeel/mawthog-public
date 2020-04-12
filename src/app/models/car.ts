import { Timestamp } from "rxjs/internal/operators/timestamp";

export class Brand {
  id?: Number;
  brand?: String;
  cls?: String;
}
export class Sub {
  id?: Number;
  brand?: Brand;
  sub?: String;
}
export class Car {
  id: Number;
  brand?: Brand;
  sub?: Sub;
  subBrandId: Number;
  time: Date;
  price: Number;
  specifications?: String;
  fueltype?: String;
  incomingtype?: String;
  gear?: String;
  city: String;
  color: String;
  pictures: String;
  model: Number;
  createdAt: Date;
}
