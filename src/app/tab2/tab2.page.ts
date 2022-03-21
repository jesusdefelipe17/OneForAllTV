import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { servicioPelicula } from '../services/servicioPelicula';
import { busqueda } from '../interfaces/busqueda';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  idPelicula:string;
  url:string;
  resultados_reparto;
  busqueda:busqueda = new busqueda();
  peliculas:Array<any>=[];
  keyTrailer:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public sanitizer: DomSanitizer,private servicioPelicula :servicioPelicula) {}
  ngOnInit(): void {
  
    
    this.servicioPelicula.getPopularMovies().subscribe(todos=>{
      console.log(todos.results);
      this.peliculas = todos.results;
      
    });
    
  }
 
  busquedaAplication(value){

    this.servicioPelicula.getPeliculaBusqueda(value).subscribe(busquedaPeliculas=>{

      console.log(busquedaPeliculas);

      this.busqueda = busquedaPeliculas;

    })
    
  }

}
