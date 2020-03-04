import { SettingsService } from './../../../services/settings.service';
import { MenuService, Menu } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu:Menu[] = [];
  app;
  constructor(private menuService: MenuService, private settingsService: SettingsService) {
    this.menu.push(...this.menuService.getMenu())
    this.app = this.settingsService.getApp();
  }

  ngOnInit(): void {
    console.log(this.menu);
   }

}
