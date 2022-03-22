import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('draggable') private draggableElement: ElementRef;
  idPelicula:string;
  url:string;
  resultados_reparto;
  busqueda:busqueda = new busqueda();
  peliculas:Array<any>=[];
  keyTrailer:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public sanitizer: DomSanitizer,private servicioPelicula :servicioPelicula) {

    router.events.subscribe((val) => {
      // see also 
      console.log();
  });
  }
  ngOnInit(): void {
  
    
    this.servicioPelicula.getPopularMovies().subscribe(todos=>{
      console.log(todos.results);

        
      for (let index = 0; index < todos.results.length; index++) {
       
        if(todos.results[index].poster_path!=null){

        }else{
          todos.results.splice(index, 1);
        }
      }

      this.peliculas = todos.results;
      
    });
    
  }
 
  busquedaAplication(value){
    console.log(value);

    if(value==""){
      document.getElementById("drag").style.display="block";
      document.getElementById("drag2").style.display="none";
    }else{
      document.getElementById("drag").style.display="none";
      document.getElementById("drag2").style.display="block";
      this.servicioPelicula.getPeliculaBusqueda(value).subscribe(busquedaPeliculas=>{
  
        console.log(busquedaPeliculas);

        for (let index = 0; index < busquedaPeliculas.results.length; index++) {
       
          if(busquedaPeliculas.results[index].poster_path!=null){
  
          }else{
            busquedaPeliculas.results.splice(index, 1);
          }
        }
  
        this.busqueda = busquedaPeliculas;
        
      })
    }
    
  }

  onCancel(value) {
    document.getElementById("drag").style.display="block";
    document.getElementById("drag2").style.display="none";
  }

}
