import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { usuario } from '../interfaces/usuario';
import { BaseDatosService } from '../services/base-datos.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuario:string
  user2
  constructor(private firestoreService: BaseDatosService,private activatedRoute: ActivatedRoute,private control:Router) {}


  ngOnInit() {


    this.usuario = this.activatedRoute.snapshot.paramMap.get("usuario");
   
    if(this.usuario=="empty"){
      
    }else{
      this.firestoreService.recorrerBD(this.usuario)
      .subscribe(valoresBaseDatos => {
          
        if(valoresBaseDatos.length!=0){

          
          this.user2 = new usuario();
          this.user2=Object.assign(this.user2,valoresBaseDatos[0]);
          console.log(this.user2.user);
         
          this.control.navigateByUrl('/tabs/tab3/'+this.user2.user);

        }
        
      });

    }
  
   
    

    //this.firestoreService.insertar(this.usuario);


  }



}
