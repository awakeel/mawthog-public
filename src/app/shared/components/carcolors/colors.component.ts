import { TransferService } from "./../../../routes/addcar/transfer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent implements OnInit {
  selectedValue;
  colors: any[] = [
    {
      color: "أبيض ",
      style: "#FFFFFF",
    },
    {
      color: " أسود ",
      style: "#000000",
    },
    {
      color: "فضي ",
      style: "#C0C0C0",
    },
    {
      color: "أحمر ",
      style: "#FF0000",
    },
    {
      color: "بني ",
      style: "#800000",
    },
    {
      color: "ازرق ",
      style: "#0000FF",
    },
    {
      color: " أخضر ",
      style: "#008000",
    },
    {
      color: " أصفر ",
      style: "#FFFF00",
    },
    {
      color: "آخر",
      image: "no-color.jpg",
    },
  ];
  constructor(public transfer: TransferService) {}
  changeColor(item) {
    console.log(item);
    this.transfer.color = JSON.stringify(item);
  }
  ngOnInit(): void {}
}
