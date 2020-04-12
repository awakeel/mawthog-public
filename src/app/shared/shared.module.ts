import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CardComponent } from "./components/grid-card/card.component";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from "primeng/splitbutton";
import { CardModule } from "primeng/card";
import { DataViewModule } from "primeng/dataview";
import { PanelModule } from "primeng/panel";
import { DropdownModule } from "primeng/dropdown";
import { ListCarComponent } from "./components/list-car/list-car.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CardTitleComponent } from "./components/card-title/card-title.component";
import { CardSubTitleComponent } from "./components/card-sub-title/card-sub-title.component";
import { CardButtonsComponent } from "./components/card-buttons/card-buttons.component";
import { CardTagsComponent } from "./components/card-tags/card-tags.component";
import { ChipsModule } from "primeng/chips";
import { AgoPipe } from "./pipes/ago.pipe";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { BigscreenComponent } from "./components/bigscreen/bigscreen.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { TrendingComponent } from "./components/trending/trending.component";
import { CarouselModule } from "primeng/carousel";
import { TabViewModule } from "primeng/tabview";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MainSearchComponent } from "./components/main-search/main-search.component";
const MatModules = [
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  CardModule,
  DataViewModule,
  PanelModule,
  DropdownModule,
  ProgressSpinnerModule,
  ChipsModule,
  CarouselModule,
  TabViewModule,
  MessageModule,
  MessagesModule,
];
const components = [
  CardComponent,
  ListCarComponent,
  CardTitleComponent,
  SearchBarComponent,
  BigscreenComponent,
  PricingComponent,
  TrendingComponent,
  MainSearchComponent,
  CardTagsComponent,
];
@NgModule({
  declarations: [
    ...components,
    CardSubTitleComponent,
    CardButtonsComponent,
    CardTagsComponent,
    AgoPipe,
    BigscreenComponent,
  ],
  imports: [CommonModule, ...MatModules],
  exports: [...MatModules, CommonModule, ...components],
})
export class SharedModule {}
