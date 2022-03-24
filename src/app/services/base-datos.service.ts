import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  constructor(private angularFirestore: AngularFirestore) { }

  public insertar(usuario) {
  this.angularFirestore.collection("usuarios").add({
    user: usuario.user,
    pass:usuario.pass,
    peliculas: usuario.peliculas,
    series:usuario.series

}).then(ref=> {
  console.log("Document written with ID: ", ref.id);

})
  }
/*
  public insertar(usuario) {
    this.angularFirestore.collection('usuarios').doc('idPelicula').update({
      user:usuario.user,
      peliculas: usuario.peliculas
   });
  } 

  */
}
