import { SubBrandService } from "./../../services/subbrand.service";
import { Observable } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Car, Brand, Sub } from "../../models/car";
import { SelectItem } from "primeng/api/selectitem";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  cars$: Observable<Car[]>;
  selectedCar: Car;
  loading$: Observable<boolean>;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;
  sortOrder: number;
  constructor(
    public carService: CarService, //public subBrandService: SubBrandService
    public brandService: SubBrandService
  ) {
    this.getCars();
    this.cars$ = this.carService.entities$;
    //this.cars$ = this.carService.entities$;
    this.loading$ = this.carService.loading$;
  }
  getCars() {
    this.carService.getAll();
  }
  ngOnInit(): void {
    // this.subBrandService.getAll().subscribe((data) => {
    // console.log(data);
    //});
  }
  onSortChange(ev) {}
}
