import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Adress: </strong> {{adress.street}} {{adress.neighborhood}} {{adress.city}} </p>
  `,
})
export class AppComponent  { 
  name = 'Paola';
  email = 'paolazaratem@gmail.com';
  adress = {
    street: 'neu krugalle',
    neighborhood: 'kopenick',
    city: 'Berlin'
  }
 }
