import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { servicioPelicula } from '../services/servicioPelicula';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { trailer } from '../interfaces/trailer';
import { reparto } from '../interfaces/reparto';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-pelicula',
  templateUrl: './pagina-pelicula.page.html',
  styleUrls: ['./pagina-pelicula.page.scss'],
})
export class PaginaPeliculaPage implements OnInit {

  idPelicula: string;
  enlaces: string[] = [];
  url: string = '';
  resultados;
  resultados_reparto;
  valoresPeliculas: valoresPeliculas = new valoresPeliculas();
  trailer: trailer = new trailer();
  peliculas: Array<any> = [];
  keyTrailer: string;
  reparto: reparto = new reparto();
  reparto_array: Array<any> = [];
  idiomaSeleccionado: number = 0; // Idioma por defecto
  
  cargarPelicula: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private servioPelicula: servicioPelicula,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get("id");

    // Primero, obtener el ID de la película en TMDB
    this.servioPelicula.getNumPelicula(this.idPelicula).subscribe((response: any) => {
      const numPeli = response.results[0]?.id; // Extraer el ID de la película

      if (numPeli) {
        // Ahora, obtener el reparto de la película utilizando el ID
        this.getRepartoPelicula(numPeli);
      }
    });

    // Obtener información de la película
    this.servioPelicula.getPelicula(this.idPelicula).subscribe(resultados => {
      this.valoresPeliculas = resultados;
      this.enlaces = this.valoresPeliculas.links.map(l => l.replace('doodstream.com', 'dood.li'));
      this.cargarPelicula = true;
      this.updateIframeUrl(); // Actualiza la URL del iframe al cargar
    });
  }

  getRepartoPelicula(numPeli: number) {
    this.servioPelicula.getRepartoPelicula(numPeli).subscribe((reparto: reparto) => {
      this.reparto = reparto;
      this.reparto_array = reparto.cast; // Suponiendo que el reparto viene en un array llamado "cast"
      console.log(this.reparto);
    });
  }

  close() {
    this.router.navigate(['../']);
  }

  setLanguage(index: number) {
    this.idiomaSeleccionado = index;
    this.updateIframeUrl(); // Actualiza la URL cuando se cambia el idioma
  }

  updateIframeUrl() {
    // Actualiza la URL del iframe según el enlace seleccionado
    
    this.url = this.enlaces[this.idiomaSeleccionado] || this.enlaces[0];
  }

  getPeliculaStream(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
