import { environment } from "./../../../../environments/environment";
import { Car, Brand, Sub } from "src/app/models/car";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-title",
  templateUrl: "./card-title.component.html",
  styleUrls: ["./card-title.component.scss"],
})
export class CardTitleComponent implements OnInit {
  @Input() car: Car;
  brand: Brand;
  sub: Sub;
  constructor() {}

  ngOnInit(): void {
    console.log(this.car);
    this.brand = this.car.brand || {};
    this.sub = this.car.sub || {};
  }
  getCarPictures(pictures) {
    if (pictures) {
      return environment.HOST + environment.UPLOAD + pictures.split(",")[0];
    }
  }
}
