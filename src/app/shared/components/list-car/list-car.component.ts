import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-car",
  templateUrl: "./list-car.component.html",
  styleUrls: ["./list-car.component.scss"]
})
export class ListCarComponent implements OnInit {
  @Input() car;
  constructor() {
    console.log(this.car);
  }

  ngOnInit(): void {}
  selectCar(ev, car) {}
}
