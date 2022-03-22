import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaSeriePage } from './pagina-serie.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaSeriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaSeriePageRoutingModule {}
