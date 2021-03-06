import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { pelicula } from '../interfaces/pelicula';
import { trailer } from '../interfaces/trailer';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { reparto } from '../interfaces/reparto';
import { busqueda } from '../interfaces/busqueda';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { series } from '../interfaces/series';
import { serie } from '../interfaces/serie';
import { temporada } from '../interfaces/temporada';


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

  getSeriePopular(){
    var path = 'https://api.themoviedb.org/3/tv/popular?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES&page=1';
    console.log(path);
    return this.http.get<series>(path);
  }
  getSerie(numSerie){
    var path = 'https://api.themoviedb.org/3/tv/'.concat(numSerie).concat('?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<serie>(path);
  }
  getEpisodios(numTemporada,idSerie){
    var path = 'https://api.themoviedb.org/3/tv/'.concat(idSerie).concat('/season/').concat(numTemporada).concat('?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<temporada>(path);
  }
  getEpisodio(numTemporada,idSerie,idCapitulo){
    var path = 'https://api.themoviedb.org/3/tv/'.concat(idSerie).concat('/season/').concat(idCapitulo).concat('/episode/').concat(numTemporada).concat('?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<temporada>(path);
  }
  getEpisodioReparto(idSerie,numTemporada){ 
    var path = 'https://api.themoviedb.org/3/tv/'.concat(idSerie).concat('/season/').concat(numTemporada).concat('/credits?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES');
    console.log(path);
    return this.http.get<reparto>(path);
  }
 
  getSerieBusqueda(palabraBusqueda){ 
    var path = 'https://api.themoviedb.org/3/search/tv?api_key=f206e13c8124d66161320fc69ca6960d&language=es-ES&query='.concat(palabraBusqueda).concat('&page=1&include_adult=false');
  
    return this.http.get<busqueda>(path);
  }
}
