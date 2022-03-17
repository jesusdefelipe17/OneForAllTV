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
  constructor(private servioPelicula :servicioPelicula) {
    
  }

  ngOnInit(): void {
  
    
    this.getPopularMovie()
    
  }

  getPopularMovie(){
    this.servioPelicula.getPopularMovies().subscribe(todos=>{
      console.log(todos.results);
      this.peliculas = todos.results;
      
    });
  }

}
