import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPeliculaPageRoutingModule } from './pagina-pelicula-routing.module';

import { PaginaPeliculaPage } from './pagina-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPeliculaPageRoutingModule
  ],
  declarations: [PaginaPeliculaPage]
})
export class PaginaPeliculaPageModule {}
