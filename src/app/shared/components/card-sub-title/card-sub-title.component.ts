import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car";

@Component({
  selector: "app-card-sub-title",
  templateUrl: "./card-sub-title.component.html",
  styleUrls: ["./card-sub-title.component.scss"],
})
export class CardSubTitleComponent implements OnInit {
  @Input() car: Car;
  constructor() {}

  ngOnInit(): void {}
}
