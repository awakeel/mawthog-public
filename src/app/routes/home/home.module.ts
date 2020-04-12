import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home.module.routing";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
