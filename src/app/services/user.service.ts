import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class UserService {
  private utenti: Observable<any[]>;

  constructor(
    private af: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {
    //this.utenti = af.list('/UTENTI').valueChanges();
  }

  getUsers() {
    //return this.utenti;

    return this.af
      .list("/UTENTI")
      .snapshotChanges()
      .pipe(
        map(changes => 
          //changes.map(c => ({ key: c.payload.key, ...c.payload.val }))
          changes.map(c => alert (c.payload.val[0]))
        )
      );

    return this.firestore
      .collection("angularfirebaseexample-f3651-default-rtdb")
      .snapshotChanges();
  }

  getUsersByList() {
    //return this.utenti;
    return this.af.list("/UTENTI").valueChanges();
  }

  removeUser() {}

  addUser() {}

  updateUser() {}
}
