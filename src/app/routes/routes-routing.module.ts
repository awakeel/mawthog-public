import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "../layout/default/default.component";
const routes: Routes = [
  //{ path: "", pathMatch: "full", redirectTo: "home" },;
  {
    path: "home",
    component: DefaultComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: "summary/:id",
    component: DefaultComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./summary/summary.module").then((m) => m.SummaryModule),
      },
    ],
  },
  {
    path: "add",
    component: DefaultComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./addcar/addcar.module").then((m) => m.AddcarModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
