import { Router } from "@angular/router";
import { SubBrandService } from "./../../../services/subbrand.service";
import { BrandService } from "./../../../services/brand.service";
import { Brand, Sub } from "src/app/models/car";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SelectItem } from "primeng/api/selectitem";
import { map } from "rxjs/operators";
interface SelectBox {
  label: String;
  value: String;
  name?: String;
}

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  brands: Observable<Brand[]>;
  subBrands: Observable<Sub[]>;
  sub: SelectBox[];
  sortOptions: SelectItem[];
  sortKey: string;
  years: SelectBox[];
  colors;
  cities: SelectBox[];
  selectedBrand;

  constructor(
    public brandService: BrandService,
    private subService: SubBrandService,
    private router: Router
  ) {
    this.brands = this.brandService.entities$;
    this.subBrands = this.subService.entities$;
    this.subBrands.subscribe((data: any) => {
      console.log(data);
      this.sub = data.map((item) => {
        return { label: item.sub, id: item.id };
      });
    });
    this.years = this.getYears();
  }
  onSortChange(ev) {}
  ngOnInit(): void {
    this.sortOptions = [
      { label: "Newest First", value: "!year" },
      { label: "Oldest First", value: "year" },
      { label: "Brand", value: "brand" },
    ];
    this.colors = [{ label: "Red" }, { label: "Green" }];
    this.cities = [
      { label: "Islamabad", value: "Islamabad" },
      { label: "Karachi", value: "Karachi" },
    ];
    this.brandService.getAll();
    this.subService.getAll();
  }
  getYears() {
    const date = new Date();
    const current = date.getFullYear() + 2;
    const y = [];
    for (let start = 1980; start < current; start++) {
      y.push({ label: start, value: start });
    }
    return y;
  }
}
