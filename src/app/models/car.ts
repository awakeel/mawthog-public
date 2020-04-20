import { Timestamp } from "rxjs/internal/operators/timestamp";

export class Brand {
  id?: Number;
  brand?: String;
  cls?: String;
}
export class Sub {
  id?: Number;
  brandid?: Brand;
  sub?: String;
}
export class Car {
  id?: any;
  brand?: Brand;
  sub?: Sub;
  subId: Number;
  brandId: Number;
  time?: Date;
  price: Number;
  specifications?: String;
  fueltype?: String;
  incomingtype?: String;
  gear?: String;
  city: String;
  color: String;
  pictures: String;
  model: Number;
  quantity: Number;
  createdAt?: Date;
}
