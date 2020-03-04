import { SettingsService } from './settings.service';
import { MenuService } from './menu.service';
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class StartupService {
  constructor(private http: HttpClient, private menuService: MenuService, private settingsService:SettingsService) {}
  load(): Promise<any> {
    return new Promise(resolve => {
      this.http
        .get("../../assets/appData.json")
        .pipe(
          map((data:any)=>data),
          catchError(([data]) => {
            resolve(null);
            return data;
          })
        )
        .subscribe(
         (data:any) => {
            this.menuService.setMenu(data.menu)
            this.settingsService.setApp(data.app)
          },
          () => {},
          () => {
            resolve(null);
          }
        );
    });
  }
}
