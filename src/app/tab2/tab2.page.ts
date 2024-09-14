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
  busquedas:Array<any>=[];
  arrayBusquedas:Array<any>=[];
  cargarPeliculasPopulares:boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,public sanitizer: DomSanitizer,private servicioPelicula :servicioPelicula) {

    router.events.subscribe((val) => {
      // see also 
      console.log();
  });
  }
  ngOnInit(): void {
  
    
    this.servicioPelicula.getPopularMovies().subscribe(response => {
      this.peliculas  = response.peliculas;
      this.cargarPeliculasPopulares = false;
     
  });
    
  }
 
  busquedaAplication(value){
    

    if(value==""){
      document.getElementById("drag").style.display="block";
      document.getElementById("drag2").style.display="none";
    }else{
      document.getElementById("drag").style.display="none";
      document.getElementById("drag2").style.display="block";
   
      this.servicioPelicula.getPeliculaBusqueda(value).subscribe(busquedaPeliculas=>{
        this.busquedas=[];
       
        for (let index = 0; index < busquedaPeliculas.results.length; index++) {
       
          if(busquedaPeliculas.results[index].poster_path!=null){
            
            this.busquedas.push(busquedaPeliculas.results[index]);
  
          }else{
            busquedaPeliculas.results.splice(index, 1);
          }

        }
   
        
      })


      this.servicioPelicula.getSerieBusqueda(value).subscribe(busquedaSeries=>{
  
       

        for (let index = 0; index < busquedaSeries.results.length; index++) {
       
          if(busquedaSeries.results[index].poster_path!=null){
            this.busquedas.push(busquedaSeries.results[index]);
          }else{
            busquedaSeries.results.splice(index, 1);
          }

        }
        
      })
      this.arrayBusquedas = this.busquedas.sort((a, b) => a.popularity < b.popularity ? 1 :  b.popularity < a.popularity ? -1 : 0);
      console.log( this.arrayBusquedas);
    }
    
  }
   
  onCancel(value) {
    document.getElementById("drag").style.display="block";
    document.getElementById("drag2").style.display="none";
  }

}
