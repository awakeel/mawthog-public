import { TransferService } from "./../../../routes/addcar/transfer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.scss"],
})
export class CitiesComponent implements OnInit {
  cities = [
    "الرياض",
    "جدة",
    "الاحساء",
    "الباحة",
    "الجوف",
    "الدمام",
    "الطائف",
    "القصيم",
    "المدينة",
    "تبوك",
    "جيزان",
    "حائل",
    "عرعر",
    "عسير",
    "مكة",
    "نجران",
    "أبها",
    "حفر الباطن",
    "الجبيل",
    "ينبع",
    "القنفذة",
  ];

  constructor(private transfer: TransferService) {}

  ngOnInit(): void {}
  selectCity(city) {
    this.transfer.city = city;
    ++this.transfer.step;
  }
}
