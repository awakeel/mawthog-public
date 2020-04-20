import { Brand, Sub } from "src/app/models/car";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransferService {
  step: 0 | 1 | 2 | 3 | 4 = 1;

  brand: Brand;
  subBrand: Sub;
  model: number;
  city: string;
  color: string;
  price: number;
  specifications: string;
  incomingtype: string;
  gear: string;
  fueltype: string;
  createdBy: object;
  pictures: any[];
  isDeleted: number;
  isBooked: boolean;
  createdAt: any;
  by: string;
  id: string;
  class: string;
  marketplace: string;
  quantity: number;
  documents: string;
  isUpdate: boolean;
  options: any;
  autostep: string;
  again(item?) {
    this.id = "";
    this.isUpdate = false;
    this.documents = "";
    this.marketplace = "";
    this.step = 0;
    this.brand = {};
    this.subBrand = {};
    this.model = 2019;
    this.class = "";
    this.city = "";
    this.quantity = 1;
    this.price = 0;
    this.color = "";
    this.specifications = null;
    this.fueltype = null;
    this.gear = null;
    this.incomingtype = null;
    this.isBooked = false;
    this.createdAt = new Date(Date.now());
    this.pictures = [];

    this.autostep = "";
    if (item) {
      Object.assign(this, item);
    }
  }

  constructor() {
    this.again();
  }
}
export const specs = [
  { label: "Specification 1", value: "Audi" },
  { label: "Specification 2", value: "BMW" },
];
export const types = [
  { label: "Incoming type 1", value: "Audi" },
  { label: "Incoming type 1", value: "BMW" },
];
export const fuels = [
  { label: "Fuel Type 1", value: "Audi" },
  { label: "Fuel Type 2", value: "BMW" },
];
export const gears = [
  { label: "Gear Type 1", value: "Audi" },
  { label: "Gear Type 2", value: "BMW" },
];
