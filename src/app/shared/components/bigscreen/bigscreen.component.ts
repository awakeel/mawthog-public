import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-bigscreen",
  templateUrl: "./bigscreen.component.html",
  styleUrls: ["./bigscreen.component.scss"],
})
export class BigscreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addNew() {
    this.router.navigate(["add"]);
  }
}
