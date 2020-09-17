import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaContasComponent } from "./lista-contas/lista-contas.component";

const routes: Routes = [
  { path: "", redirectTo: "conta", pathMatch: "full" },
  { path: "conta", component: ListaContasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
