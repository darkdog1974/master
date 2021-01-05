import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { map, tap } from "rxjs/operators";

@Injectable()
export class UserService {
  private usersRef: AngularFireList<any>;

  constructor(private af: AngularFireDatabase, private firestore: AngularFirestore) {
    this.usersRef = af.list('/UTENTI');
  }

  getUsers() {
  // Use snapshotChanges().map() to store the key
   return this.usersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => (
          { key: c.payload.key, ...c.payload.val() }
          ))
      )
    );
  }

  removeUser(user: any) {
     this.usersRef.remove(user.key);
  }

  addUser(user: any) {
    this.usersRef.push({ key: user.key, NOME: user.name, COGNOME: user.lastname });
  }

  updateUser(user: any, field: string, value: string) {
    this.usersRef.update(user.key, { field: value });
  }
}
