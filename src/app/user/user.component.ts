import { Component, EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { User } from './user';

@Component({
  /* 
    In questo caso il selettore viene definito come un attributo del tag <tr>
    e non come un elemento a se stante.
  */
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // 'user-data' e 'user-delete' sono gli alias con cui vengono identificati le variabili all'esterno
  @Input('user-data') user: any;
  @Output('user-delete') deleteUser = new EventEmitter();
  @Output('user-add')    addUser    = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeUser(){
    // richiamo il padre per effettuare la cancellazione
    this.deleteUser.emit(this.user); 
  }

  pushUser(){
    let u = new User;
    u.key = 'ttest69';
    u.name = 'Test';
    u.lastname = 'Test';
    u.birthDay = '12/12/1969';
    this.addUser.emit(u);
  }

}