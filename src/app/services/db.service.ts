import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';


import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
  
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'baseDatos.db',
        location: 'default'
      })
    });
  }
 
  dbState() {
    return this.isDbReady.asObservable();
  }
  createTable() {
    
    return this.storage.executeSql('create table usuario()')
    
  }
 
}