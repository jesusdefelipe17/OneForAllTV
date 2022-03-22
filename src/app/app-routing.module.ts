import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pagina-pelicula/:id',
    loadChildren: () => import('./pagina-pelicula/pagina-pelicula.module').then( m => m.PaginaPeliculaPageModule)
  },
  {
    path: 'pagina-serie/:id',
    loadChildren: () => import('./pagina-serie/pagina-serie.module').then( m => m.PaginaSeriePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
