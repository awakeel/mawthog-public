import { NgModule } from "@angular/core";

import { AddcarRoutingModule } from "./addcar-routing.module";
import { AddComponent } from "./add/add.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TransferService } from "./transfer.service";

const COMPONENTS = [AddComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, AddcarRoutingModule],
  providers: [TransferService],
})
export class AddcarModule {}
