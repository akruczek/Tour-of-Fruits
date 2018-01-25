import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FruitsComponent } from "./fruits/fruits.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FruitDetailComponent } from "./fruit-detail/fruit-detail.component";

const routes: Routes = [
  { path: "fruits", component: FruitsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: FruitDetailComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
