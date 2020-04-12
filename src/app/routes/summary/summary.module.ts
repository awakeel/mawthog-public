import { SummaryComponent } from "./summary.component";
import { SummaryRoutingModule } from "./summary.module.routing";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { GalleriaModule } from "primeng/galleria";

@NgModule({
  declarations: [SummaryComponent],
  imports: [SummaryRoutingModule, SharedModule, GalleriaModule],
  exports: [SummaryComponent],
})
export class SummaryModule {}
