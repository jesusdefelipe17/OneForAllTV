import { Component, OnInit } from '@angular/core';
import { servicioPelicula } from '../services/servicioPelicula';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  todos;
  peliculas:Array<any>=[];
  series:Array<any>=[];
  cargarPeliculasPopulares:boolean = false;
  
  constructor(private servioPelicula :servicioPelicula ) {
    
  }

  ngOnInit(): void {
  
    
    this.getPopularMovie();
    this. getPopularSeries();
  }

  getPopularMovie(){
   

    this.servioPelicula.getPopularMovies().subscribe(response => {
      this.peliculas  = response.peliculas;
      this.cargarPeliculasPopulares = true;
     
  });
  }

  

  getPopularSeries(){
    this.servioPelicula.getSeriePopular().subscribe(series=>{
      console.log(series.results);
      
      
      for (let index = 0; index < series.results.length; index++) {
       
        if(series.results[index].poster_path!=null){

        }else{
          series.results.splice(index, 1);
        }
      }

      this.series = series.results;
      //Recorrer lista de series y eliminar la que tenga poster vacio
    });
  }


  errorHandler(event) {
    console.debug(event);
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
}
