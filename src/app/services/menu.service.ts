import { Injectable } from '@angular/core';

export interface Menu{
  url:string,
  title:string,
  icon:string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Menu[];
  constructor() { }
  setMenu(menu:Menu[]){
    this.menu = menu;
  }
  getMenu(){
    return <Menu[]> this.menu;
  }
}
