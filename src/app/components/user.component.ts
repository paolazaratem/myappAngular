import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.neighborhood}} {{address.city}} </p>
  `,
})
export class UserComponent  { 
  name = 'Paola';
  email = 'paolazaratem@gmail.com';
  address = {
    street: 'neu krugalle',
    neighborhood: 'kopenick',
    city: 'Berlin'
  }
 }
