import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.neighborhood}} {{address.city}} </p>
  `,
})
export class AppComponent  { 
  name = 'Paola';
  email = 'paolazaratem@gmail.com';
  address = {
    street: 'neu krugalle',
    neighborhood: 'kopenick',
    city: 'Berlin'
  }
 }
