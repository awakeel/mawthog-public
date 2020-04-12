import { SubBrandService } from "./../../../services/subbrand.service";
import { BrandService } from "./../../../services/brand.service";
import { Brand, Sub } from "src/app/models/car";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SelectItem } from "primeng/api/selectitem";
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
  sub: Observable<Sub[]>;
  sortOptions: SelectItem[];
  year: SelectBox[];
  colors;
  cities: SelectBox[];
  sortKey: string;
  constructor(
    public brandService: BrandService,
    private subService: SubBrandService
  ) {
    this.brands = this.brandService.entities$;
    this.sub = this.subService.entities$;
  }
  onSortChange(ev) {}
  ngOnInit(): void {
    this.sortOptions = [
      { label: "Newest First", value: "!year" },
      { label: "Oldest First", value: "year" },
      { label: "Brand", value: "brand" },
    ];
    this.colors = ["Red", "Green"];
    this.cities = [
      { label: "Islamabad", value: "Islamabad" },
      { label: "Karachi", value: "Karachi" },
    ];
    this.brandService.getAll();
    this.subService.getAll();
  }
}
