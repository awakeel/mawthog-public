import { TransferService } from "./../../../routes/addcar/transfer.service";
import { Brand } from "src/app/models/car";
import { Observable } from "rxjs";
import { BrandService } from "./../../../services/brand.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-brands",
  templateUrl: "./brands.component.html",
  styleUrls: ["./brands.component.scss"],
})
export class BrandsComponent implements OnInit {
  brands: Observable<Brand[]>;
  loading: Observable<Boolean>;
  constructor(
    public brandService: BrandService,
    public transfer: TransferService
  ) {
    this.getBrands();
    this.brands = this.brandService.entities$;

    //this.cars$ = this.carService.entities$;
    this.loading = this.brandService.loading$;
  }
  getBrands() {
    this.brandService.getAll();
  }
  selectBrand(brand: Brand) {
    this.transfer.brand = brand;
    console.log(brand);
    ++this.transfer.step;
  }
  ngOnInit(): void {}
}
