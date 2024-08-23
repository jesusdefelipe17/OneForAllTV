import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { servicioPelicula } from '../services/servicioPelicula';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { trailer } from '../interfaces/trailer';
import { reparto } from '../interfaces/reparto';
import { NavController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';
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
  
  cargarPelicula:boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private servioPelicula: servicioPelicula,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get("id");
    this.servioPelicula.getPelicula(this.idPelicula).subscribe(resultados => {
      this.valoresPeliculas = resultados;
      this.enlaces = this.valoresPeliculas.links.map(l => l.replace('doodstream.com', 'dood.li'));
      this.cargarPelicula = true;
      this.updateIframeUrl(); // Actualiza la URL del iframe al cargar
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
