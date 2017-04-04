import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p>Email: {{email}}</p>
  `,
})
export class AppComponent  { 
  name = 'Paola';
  email = 'paolazaratem@gmail.com' }
