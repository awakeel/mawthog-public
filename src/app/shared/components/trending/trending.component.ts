import { Car } from "src/app/models/car";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"],
})
export class TrendingComponent implements OnInit {
  @Input() title: String;
  @Input() cars: Observable<Car>;
  responsiveOptions;
  constructor() {}

  ngOnInit(): void {
    console.log(this.cars);
    console.log(this.title);
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
