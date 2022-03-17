import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPeliculaPage } from './pagina-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPeliculaPageRoutingModule {}
