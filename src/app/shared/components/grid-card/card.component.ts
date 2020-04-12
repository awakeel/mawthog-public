import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car";
import { Observable } from "rxjs";
import Utils from "../../../util/util";
import { CardTitleComponent } from "../card-title/card-title.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() car: Car; // Observable<Car>;
  @Input() width: String;
  titleFactory = CardTitleComponent;
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.car);
    //this.dummyComponent = CardTitleComponent;
  }
  selectCar(ev, car) {
    this.router.navigate([`/summary/${car.id}`]);
  }
  getCarTitle(obj: Car) {
    return Utils.getCarTitle(obj);
  }
}
