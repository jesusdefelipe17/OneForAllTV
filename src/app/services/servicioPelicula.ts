import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { PeliculaResponse, ValoresPeliculas } from '../interfaces/pelicula';
import { trailer } from '../interfaces/trailer';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { reparto } from '../interfaces/reparto';
import { busqueda } from '../interfaces/busqueda';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { series } from '../interfaces/series';
import { serie } from '../interfaces/serie';
import { temporada } from '../interfaces/temporada';
import { environment } from 'src/environments/environment';
import { peliculaTMB } from '../interfaces/peliculaTMB';


@Injectable({
  providedIn: 'root'
})
export class servicioPelicula {
 

  urlSafe: SafeResourceUrl;
  url:string;

  private baseUrl = environment.apiUrl; // Usa la URL del entorno

  constructor(private http:HttpClient,public sanitizer: DomSanitizer) { }


  getPopularMovies() {
    const path = `${this.baseUrl}/api/ultimasPeliculas`;
    return this.http.get<PeliculaResponse>(path);
}

  getPeliculaBusquedaScript(nombrePelicula) {
    const path = `${this.baseUrl}/getPeliculaBusquedaScript/${nombrePelicula}`;
    return this.http.get<string>(path);
  }

  getPelicula(nombrePelicula){
    const path = `${this.baseUrl}/getPelicula/${nombrePelicula}`;
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


  getPeliculaBusqueda(nombrePelicula){
    var path = 'https://onetvapi.onrender.com/getPeliculaBusquedaScript/'.concat(nombrePelicula);
    console.log(path);
    return this.http.get<busqueda>(path);
  }
  
  getNumPelicula(nombrePeli: string) {
    const apiKey = 'f206e13c8124d66161320fc69ca6960d';
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjA2ZTEzYzgxMjRkNjYxNjEzMjBmYzY5Y2E2OTYwZCIsIm5iZiI6MTcyNDU5NTEzOS4wOTQ1NjksInN1YiI6IjVmYTMyMzkzZjkyNTMyMDA0MGY2YTVkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x35oeEgmSjZj6faaz-HBySorrK9_GyhnojTmJXvT5y4';
    
    const path = `https://api.themoviedb.org/3/search/movie?query=${nombrePeli}&include_adult=false&language=es-ES&page=1`;
  
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    console.log(path);
  
    return this.http.get<peliculaTMB>(path, { headers });
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
