import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';  
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  caption: string = "Users List";
  utentiCollection: AngularFirestoreCollection<any>;
  utenti: Observable<any[]>;

  constructor(afs: AngularFirestore, af: AngularFireDatabase, private uService: UserService) {
    // --- NON HA FUNZIONATO ---
    //this.utentiCollection = this.afs.collection("UTENTI");
    //this.utenti = afs.collection("UTENTI").valueChanges();
    // --- FUNZIONA ---
    //this.utenti = af.list('/UTENTI').valueChanges();
  }

  ngOnInit() {
    // --- PASSO PER UN SERVIZIO ---
    this.utenti = this.uService.getUsers();
  }

  deleteUser(user){
    alert ("delete user: " + user.key);
    this.uService.removeUser(user);
  }

}