import { Component, OnInit } from '@angular/core';
import { usuario } from '../interfaces/usuario';
import { BaseDatosService } from '../services/base-datos.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user2:usuario;
  user;
  pass;
  repetirPass;
  usuario:usuario = new usuario();
  constructor(private firestoreService: BaseDatosService,private toastCtrl: ToastController,private router:Router,private navCtrl: NavController) { }

  ngOnInit() {
  
  
  }
 

  iniciarse(){

    

      this.usuario.user=this.user;
      this.usuario.pass=this.pass;
      this.firestoreService.recorrerBD1(this.usuario)
      .subscribe(valoresBaseDatos => {
          
        if(valoresBaseDatos.length!=0){

          
          this.user2 = new usuario();
          this.user2=Object.assign(this.user2,valoresBaseDatos[0]);
          console.log(this.user2.user);

          this.navCtrl.navigateBack('/tabs/tab3/'+this.user2.user)
         

        }else{
          this.showToast();
        }
        
  
      });

  }
  showToast() {
    this.toastCtrl.create({
      message: 'Error al iniciar sesion. Intentalo de nuevo',
      duration: 2000,
      cssClass: 'yourClass',
      position: 'middle'
  }).then((obj) => {
    obj.present();
  });
  }
}
