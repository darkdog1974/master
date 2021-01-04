import { Component, Input } from '@angular/core';

@Component({
  selector: 'ums',
  template: `<h1>User Managment System with {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class UmsComponent  {
  @Input() name: string;
}
