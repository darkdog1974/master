import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  caption: string = "Users List";
  utentiCollection: AngularFirestoreCollection<any>;
  utenti: Observable<any[]>;

  constructor(afs: AngularFirestore, af: AngularFireDatabase) {
    //this.utentiCollection = this.afs.collection("UTENTI");
    //this.utenti = afs.collection("UTENTI").valueChanges();
    this.utenti = af.list('/UTENTI').valueChanges();
  }

  ngOnInit() {
  }

}