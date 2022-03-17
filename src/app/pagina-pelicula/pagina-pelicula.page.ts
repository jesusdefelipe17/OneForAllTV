import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-pagina-pelicula',
  templateUrl: './pagina-pelicula.page.html',
  styleUrls: ['./pagina-pelicula.page.scss'],
})
export class PaginaPeliculaPage implements OnInit {

   idPelicula:string;
   url:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.idPelicula);
  }

  close() {
    this.router.navigate(['/', 'tabs']);
  }
  
  getPeliculaStream(){
    this.url="https://www.2embed.ru/embed/tmdb/movie?id="+this.idPelicula;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
   }

}
