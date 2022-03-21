import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { pelicula } from '../interfaces/pelicula';
import { trailer } from '../interfaces/trailer';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { reparto } from '../interfaces/reparto';
import { busqueda } from '../interfaces/busqueda';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';




@Injectable({
  providedIn: 'root'
})
export class servicioPelicula {

  urlSafe: SafeResourceUrl;
  url:string;
  constructor(private http:HttpClient,public sanitizer: DomSanitizer) { }


  getPopularMovies(){
    var path = 'https://api.themoviedb.org/3/movie/popular?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES&page=1';
    return this.http.get<pelicula>(path);
  }

  getPelicula(numPeli){
    var path = 'https://api.themoviedb.org/3/movie/'.concat(numPeli).concat('?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<valoresPeliculas>(path);
  }
  getTrailer(numPeli){
    var path = 'https://api.themoviedb.org/3/movie/'.concat(numPeli).concat('/videos?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<trailer>(path);
  }

  getRepartoPelicula(numPeli){
    var path = 'https://api.themoviedb.org/3/movie/'.concat(numPeli).concat('/credits?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<reparto>(path);
  }

  getPeliculaBusqueda(palabraBusqueda){
    var path = 'https://api.themoviedb.org/3/search/movie?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES&query='.concat(palabraBusqueda).concat('&page=1&include_adult=false');
    console.log(path);
    return this.http.get<busqueda>(path);
  }
 
}
