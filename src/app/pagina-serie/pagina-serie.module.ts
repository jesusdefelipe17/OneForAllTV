import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaSeriePageRoutingModule } from './pagina-serie-routing.module';

import { PaginaSeriePage } from './pagina-serie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaSeriePageRoutingModule
  ],
  declarations: [PaginaSeriePage]
})
export class PaginaSeriePageModule {}
