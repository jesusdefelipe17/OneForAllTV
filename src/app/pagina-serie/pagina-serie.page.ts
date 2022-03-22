import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { servicioPelicula } from '../services/servicioPelicula';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { serie } from '../interfaces/serie';
import { temporada } from '../interfaces/temporada';

@Component({
  selector: 'app-pagina-serie',
  templateUrl: './pagina-serie.page.html',
  styleUrls: ['./pagina-serie.page.scss'],
})
export class PaginaSeriePage implements OnInit {
  idSerie:string;
  url:string;
  resultados;
  resultados_reparto;
  serie:serie = new serie();
  seasons:[
    {
      season_number:number;
    }
  ];
  idTemporadaFinal:number;
  capitulo:number;
  temporada:temporada = new temporada();
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public sanitizer: DomSanitizer,private servioPelicula :servicioPelicula) { }

  ngOnInit() {

    this.idSerie = this.activatedRoute.snapshot.paramMap.get("id");

    this.servioPelicula.getSerie(this.idSerie).subscribe(resultados=>{
      this.serie = resultados;
      this.seasons = resultados.seasons;
      console.log(this.seasons);
    });

  

    /*
    this.servioPelicula.getRepartoPelicula(this.idPelicula).subscribe(resultados_reparto=>{
      

      console.log(this.reparto.cast);

      for (let index = 0; index < resultados_reparto.cast.length; index++) {
       
        if(resultados_reparto.cast[index].profile_path!=null){

        }else{
          resultados_reparto.cast.splice(index, 1);
        }
      }

      this.reparto = resultados_reparto;

      this.reparto_array= this.reparto.cast;
    });
    */

  }
  close() {
    this.router.navigate(['/', 'tabs']);
  }
  
  busquedaCapitulosTemporada(value){
     
    //(<HTMLInputElement>document.getElementById("selectCapitulo")).value="";
   
    this.idTemporadaFinal=value;
    this.servioPelicula.getEpisodios(value,this.idSerie).subscribe(episodios=>{
      this.temporada = episodios;
    });
  }

  busquedaCapitulo(value){

    this.capitulo=value;
    this.servioPelicula.getEpisodio(value,this.idSerie,this.idTemporadaFinal).subscribe(episodio=>{
     
    });

    

  }
  getSerieStream(){
    this.url="https://www.2embed.ru/embed/tmdb/tv?id="+this.idSerie+"&s="+this.idTemporadaFinal+"&e="+this.capitulo+"";
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
   }

}
