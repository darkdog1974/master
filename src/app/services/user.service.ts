import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "../interfaces/user";

@Injectable()
export class UserService {
  private itemsRef: AngularFireList<any>;
  private utenti: Observable<any[]>;
  private items: Observable<any[]>;

  constructor(private af: AngularFireDatabase, private firestore: AngularFirestore) {
    this.itemsRef = af.list('/UTENTI');
  }

  getUsers() {
    //return this.utenti;

    userList: Array<User>();

  // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    alert (this.items);
    /*
    this.af
      .list("/UTENTI")
      .snapshotChanges()
      .pipe(
        map(changes => 
          //changes.map(c => ({ key: c.payload.key, ...c.payload.val }))
          changes.map(c => ({
          
            }))
        )
      );
      */
    
   /* return this.af
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
      .snapshotChanges();*/
  }

  getUsersByList() {
    //return this.utenti;
    return this.af.list("/UTENTI").valueChanges();
  }

  removeUser() {}

  addUser() {}

  updateUser() {}
}
