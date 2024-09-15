import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { servicioPelicula } from '../services/servicioPelicula';
import { busqueda } from '../interfaces/busqueda';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('draggable') private draggableElement: ElementRef;

  idPelicula: string;
  url: string;
  resultados_reparto;
  busqueda: busqueda = new busqueda();
  peliculas: Array<any> = [];
  keyTrailer: string;
  busquedas: Array<any> = [];
  arrayBusquedas: Array<any> = [];
  cargarPeliculasPopulares: boolean = true;

  // Definición de Subject para manejar los eventos de búsqueda con debounce
  private searchSubject: Subject<string> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer, private servicioPelicula: servicioPelicula) {
    // Escucha cambios en la ruta
    router.events.subscribe((val) => {
      console.log();
    });

    // Aplicar debounce al Subject para controlar las llamadas a la API
    this.searchSubject.pipe(
      debounceTime(1500),  // Espera 500 ms después del último input
      distinctUntilChanged()  // Evita emitir valores duplicados
    ).subscribe(value => {
      this.realizarBusqueda(value);  // Realiza la búsqueda después del debounce
    });
  }

  ngOnInit(): void {
    // Cargar las películas populares al inicio
    this.servicioPelicula.getPopularMovies().subscribe(response => {
      this.peliculas = response.peliculas;
      this.cargarPeliculasPopulares = false;
    });
  }

  // Método que se llama en cada input en el buscador
  busquedaAplication(value: string) {
    this.searchSubject.next(value);  // Envía el valor al Subject
  }

  // Realiza la búsqueda cuando el debounce termina
  realizarBusqueda(value: string) {
    if (value === "") {
      document.getElementById("drag").style.display = "block";
      document.getElementById("drag2").style.display = "none";
      this.busquedas = [];  // Limpiar los resultados de búsqueda cuando no hay valor
    } else {
      document.getElementById("drag").style.display = "none";
      document.getElementById("drag2").style.display = "block";

      // Limpiar los resultados de búsqueda antes de hacer nuevas peticiones
      this.busquedas = [];
      this.arrayBusquedas = [];

      // Llamada a la API para buscar películas
      this.servicioPelicula.getPeliculaBusqueda(value).subscribe(busquedaPeliculas => {
        for (let index = 0; index < busquedaPeliculas.results.length; index++) {
          if (busquedaPeliculas.results[index].poster_path != null) {
            this.busquedas.push(busquedaPeliculas.results[index]);
          }
        }

        // Si es necesario, ordenar la lista de películas después de obtener los resultados
        this.ordenarBusquedasPorPopularidad();
      });

    }
  }

  // Método para ordenar las búsquedas por popularidad
  ordenarBusquedasPorPopularidad() {
    this.arrayBusquedas = this.busquedas.sort((a, b) => a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0);
    console.log(this.arrayBusquedas);
  }

  // Método para manejar la cancelación de la búsqueda
  onCancel(value) {
    document.getElementById("drag").style.display = "block";
    document.getElementById("drag2").style.display = "none";
    this.busquedas = [];  // Limpiar los resultados de búsqueda cuando se cancela
  }
}
