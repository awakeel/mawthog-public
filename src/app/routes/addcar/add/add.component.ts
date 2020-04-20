import { CarService } from "src/app/services/car.service";
import { Car } from "src/app/models/car";
import {
  TransferService,
  specs,
  fuels,
  types,
  gears,
} from "./../transfer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  constructor(
    public transfer: TransferService,
    public carService: CarService
  ) {}
  specs = specs;
  gears = gears;
  types = types;
  fuels = fuels;
  isAccepted;
  ngOnInit(): void {}
  eventChange(data) {
    this.transfer.brand = data;
    ++this.transfer.step;
  }
  save() {
    const _s = this.transfer;
    const car: Car = {
      brand: _s.brand,
      sub: _s.subBrand,
      subId: _s.subBrand.id,
      brandId: _s.brand.id,
      price: _s.price,
      specifications: _s.specifications,
      fueltype: _s.fueltype,
      incomingtype: _s.incomingtype,
      gear: _s.gear,
      city: _s.city,
      color: _s.color,
      pictures: _s.pictures.join(","),
      model: _s.model,
      quantity: _s.quantity,
    };
    this.carService.add(car);
  }
}
