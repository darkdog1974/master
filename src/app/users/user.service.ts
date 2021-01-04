import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private utenti: Observable<any[]>;

  constructor(af: AngularFireDatabase) { 
    this.utenti = af.list('/UTENTI').valueChanges();
  }

  getUsers(){
    return this.utenti;
  }

}