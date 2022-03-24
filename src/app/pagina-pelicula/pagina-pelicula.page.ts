import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { servicioPelicula } from '../services/servicioPelicula';
import { valoresPeliculas } from '../interfaces/valoresPeliculas';
import { trailer } from '../interfaces/trailer';
import { reparto } from '../interfaces/reparto';
import { NavController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-pagina-pelicula',
  templateUrl: './pagina-pelicula.page.html',
  styleUrls: ['./pagina-pelicula.page.scss'],
})
export class PaginaPeliculaPage implements OnInit {

   idPelicula:string;
   url:string;
   resultados;
   resultados_reparto;
   valoresPeliculas:valoresPeliculas = new valoresPeliculas();
   trailer:trailer = new trailer();
   peliculas:Array<any>=[];
   keyTrailer:string;
   reparto:reparto = new reparto();
   reparto_array:Array<any>=[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,public sanitizer: DomSanitizer,private servioPelicula :servicioPelicula,private navCtrl: NavController) { }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get("id");

    this.servioPelicula.getPelicula(this.idPelicula).subscribe(resultados=>{
      this.valoresPeliculas = resultados;

    });
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

  }

  close() {
    this.navCtrl.back();
  }
  
  getPeliculaStream(){
    this.url="https://www.2embed.ru/embed/tmdb/movie?id="+this.idPelicula;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
   }

  

}
