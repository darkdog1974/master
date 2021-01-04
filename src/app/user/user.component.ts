import { Component, EventEmitter,  Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  removeUser(){
    // richiamo il padre per effettuare la cancellazione
    this.deleteUser.emit(this.user); 
  }

  addUser(){
    this.user.key = "test";
  }

}