import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-car",
  templateUrl: "./list-car.component.html",
  styleUrls: ["./list-car.component.scss"],
})
export class ListCarComponent implements OnInit {
  @Input() car;
  constructor(private router: Router) {
    console.log(this.car);
  }

  ngOnInit(): void {}
  selectCar(ev, car) {
    this.router.navigate([`/summary/${car.id}`]);
  }
  getCarPictures(pictures) {
    if (pictures) {
      return environment.HOST + environment.UPLOAD + pictures.split(",")[0];
    }
  }
  getBackground(color) {
    return JSON.parse(color);
  }
}
