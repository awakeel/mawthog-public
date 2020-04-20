import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { CarService } from "./../../services/car.service";
import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/models/car";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  car: Car;
  constructor(private carService: CarService, private route: ActivatedRoute) {}
  images = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.carService.getByKey(id).subscribe((data) => {
      this.car = data[0];
      if (this.car.pictures && this.car.pictures.length > 1) {
        this.images = this.car.pictures.split(",");
      } else {
        this.images.push(this.car.pictures);
      }
      this.images = this.images.map((image) => {
        return { source: environment.HOST + environment.UPLOAD + image };
      });
      console.log(this.images);
    });

    //this.car.subscribe((data) => {});
    // console.log(this.carService.);
    //this.carService.getByKey(this.route.snapshot.paramMap.get("id")).
    //this.images = this.car.pictures.split(",");
  }
}
