import { Component, OnInit } from '@angular/core';
import { usuario } from '../interfaces/usuario';
import { BaseDatosService } from '../services/base-datos.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user;
  pass;
  repetirPass;
  usuario:usuario = new usuario();
  constructor(private firestoreService: BaseDatosService,private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  registrarse(){

    console.log(this.pass);

    if(this.pass!=this.repetirPass){
      this.showToast();
    }else{
      this.usuario.user=this.user;
      this.usuario.pass=this.pass;
      this.usuario.repetirPass=this.repetirPass;
      this.firestoreService.insertar(this.usuario);
    }
 

  

  }
  showToast() {
    this.toastCtrl.create({
      message: 'Error al registrarse. La contraseña no coincide. Intentalo de nuevo',
      duration: 2000,
      cssClass: 'yourClass',
      position: 'middle'
  }).then((obj) => {
    obj.present();
  });
  }
}
