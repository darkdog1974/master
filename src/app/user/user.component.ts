import { Component, Input, OnInit } from '@angular/core';

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
  // 'user-data' è l'alias con il quale viene identificato la variabile user
  @Input('user-data') user: any;

  constructor() { }

  ngOnInit() {
  }

}