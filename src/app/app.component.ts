import { Component, VERSION } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';  
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  utentiCollection: AngularFirestoreCollection<any>;
  utenti: Observable<any[]>;
 

  constructor(afs: AngularFirestore, af: AngularFireDatabase) {
    //this.utentiCollection = this.afs.collection("UTENTI");
    //this.utenti = afs.collection("UTENTI").valueChanges();
    this.utenti = af.list('/UTENTI').valueChanges();
  }
}
