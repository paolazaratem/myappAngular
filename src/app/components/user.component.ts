import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.neighborhood}} {{address.city}} </p>
    <h3>Lenguajes:</h3>
    {{lenguajes}}
    <ul>
      <li *ngFor="let lenguaje of lenguajes">
        {{lenguaje}} 
      </li>
    </ul>
  `,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  lenguajes: string[];

  constructor(){
    this.name = 'papapapapa';
    this.email = 'paolazaratem@gmail.com';
    this.address = {
      street: 'neu krugalle',
      neighborhood: 'kopenick',
      city: 'Berlin'
    }
    this.lenguajes = ['Java', 'C', 'Go', 'C++'];
  }
 }

interface address {
    street: string,
    neighborhood: string,
    city: string
}