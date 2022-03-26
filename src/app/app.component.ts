import { Component } from '@angular/core';
import { BaseDatosService } from '../app/services/base-datos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { usuario } from './interfaces/usuario';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  
  userName
  user2
  constructor(private bd :BaseDatosService,private activatedRoute: ActivatedRoute,private control:Router) {}

  ngOnInit(): void {
   
    this.userName = this.activatedRoute.snapshot.paramMap.get("usuario");
    console.log(this.userName);
    if(this.userName==null){
      this.control.navigate(['/tabs/tab1/',"empty"])
    }else{
      
      this.bd.recorrerBD(this.userName)
      .subscribe(valoresBaseDatos => {
          
        if(valoresBaseDatos.length!=0){

          
          this.user2 = new usuario();
          this.user2=Object.assign(this.user2,valoresBaseDatos[0]);
          console.log(this.user2.user);
         
          this.control.navigateByUrl('/tabs/tab3/'+this.user2.user);

        }
        
      });
    }
    

  }
      
    
    
  }
  

