import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car";

@Component({
  selector: "app-card-tags",
  templateUrl: "./card-tags.component.html",
  styleUrls: ["./card-tags.component.scss"],
})
export class CardTagsComponent implements OnInit {
  @Input() car: Car;
  constructor() {}

  ngOnInit(): void {}
}
