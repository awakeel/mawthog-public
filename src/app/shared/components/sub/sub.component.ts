import { TransferService } from "./../../../routes/addcar/transfer.service";
import { SubBrandService } from "./../../../services/subbrand.service";
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Sub, Brand } from "src/app/models/car";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
interface EntityActionOptions {
  brandid?: Number;
  isOptimistic?: boolean;
  tag?: string;
  error?: Error;
  skip?: boolean;
}
@Component({
  selector: "app-sub",
  templateUrl: "./sub.component.html",
  styleUrls: ["./sub.component.scss"],
})
export class SubComponent implements OnInit {
  subs: Observable<Sub[]>;
  data: Sub[];
  loading: Observable<Boolean>;
  @Output() onSelect = new EventEmitter();
  constructor(
    public subBrandService: SubBrandService,
    public transfer: TransferService
  ) {
    this.getSubBrands();
    this.subs = this.subBrandService.entities$;
    //this.cars$ = this.carService.entities$;
    this.loading = this.subBrandService.loading$;
    this.subs.subscribe((data) => {
      console.log(data, this.transfer.brand.id);
      this.data = data.filter((d) => d.brandid === this.transfer.brand.id);
      console.log(this.data);
    });
  }
  getSubBrands() {
    this.subBrandService.getAll();
  }
  selectBrand(sub: Sub) {
    this.transfer.subBrand = sub;
    ++this.transfer.step;
  }
  ngOnInit(): void {}
}
