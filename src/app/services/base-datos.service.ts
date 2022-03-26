import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  constructor(private angularFirestore: AngularFirestore,private router:Router) { }

  public insertar(usuario) {
  this.angularFirestore.collection("usuarios").add({
    user: usuario.user,
    pass:usuario.pass,
    peliculas: usuario.peliculas,
    series:usuario.series

}).then(ref=> {
  console.log("Document written with ID: ", ref.id);

  this.router.navigateByUrl('/login');
 

})
  }
  recorrerBD1(usuario){

    return this.angularFirestore.collection('/usuarios', ref => ref.where('user', '==', usuario.user).where('pass', '==', usuario.pass)).valueChanges();
  }

  recorrerBD(user){

    return this.angularFirestore.collection('/usuarios', ref => ref.where('user', '==', user)).valueChanges();
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
