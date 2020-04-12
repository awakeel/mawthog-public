import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  app;
  constructor(private http: HttpClient) {}
  setApp(app) {
    this.app = app;
  }
  getApp() {
    return this.app;
  }
}
