import { TransferService } from "./../../../routes/addcar/transfer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-years",
  templateUrl: "./years.component.html",
  styleUrls: ["./years.component.scss"],
})
export class YearsComponent implements OnInit {
  years: Number[];
  constructor(private transfer: TransferService) {}

  ngOnInit(): void {
    this.years = this.getYears();
  }
  getYears() {
    const date = new Date();
    const current = date.getFullYear() + 2;
    const y = [];
    for (let start = 1980; start < current; start++) {
      y.push(start);
    }
    return y;
  }
  selectYear(year) {
    this.transfer.model = year;
    ++this.transfer.step;
  }
}
