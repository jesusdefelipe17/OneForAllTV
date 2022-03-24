import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { usuario } from '../interfaces/usuario';
import { BaseDatosService } from '../services/base-datos.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuario:usuario = new usuario();
  constructor(private firestoreService: BaseDatosService) {}


  ngOnInit() {

    this.usuario.user='jesus';
    this.usuario.peliculas.push("1");
    

    //this.firestoreService.insertar(this.usuario);


  }



}
