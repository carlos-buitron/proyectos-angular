import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from "./paises.component";

const routes: Routes = [
  // Ruteando mi componente
  { path: '', component: PaisesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
