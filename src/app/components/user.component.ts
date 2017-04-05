import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.neighborhood}} {{address.city}} </p>
    <div *ngIf="showLenguajes">
      <h3>Lenguajes:</h3>
        {{lenguajes}}
      <ul>
        <li *ngFor="let lenguaje of lenguajes">
          {{lenguaje}} 
        </li>
      </ul>
    </div>
  `,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  lenguajes: string[];
  showLenguajes: boolean;

  constructor(){
    this.name = 'papapapapa';
    this.email = 'paolazaratem@gmail.com';
    this.address = {
      street: 'neu krugalle',
      neighborhood: 'kopenick',
      city: 'Berlin'
    }
    this.lenguajes = ['Java', 'C', 'Go', 'C++'];
    this.showLenguajes = false;
  }
 }

interface address {
    street: string,
    neighborhood: string,
    city: string
}