import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { map, tap } from "rxjs/operators";
import { User } from "../interfaces/user";

@Injectable()
export class UserService {
  private usersRef: AngularFireList<any>;

  constructor(private af: AngularFireDatabase, private firestore: AngularFirestore) {
    this.usersRef = af.list('/UTENTI');
  }

  getUsers() {

  this.usersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ( alert(c.payload.key)
          /*{ 
          id: c.payload.key,
          name: c.payload.ref.key,
          lastname: "",
          email: "",
          fiscalCode: "",
          idProvince: "",
          birthDay: "",
          age: 0}*/
          ))
      )
    );


  // Use snapshotChanges().map() to store the key
   return this.usersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => (
          { key: c.payload.key, ...c.payload.val() }
          ))
      )
    );

    
  }

  removeUser() {}

  addUser() {}

  updateUser() {}
}
