import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>{{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.neighborhood}} {{address.city}} </p>
    <button (click)="toggleLanguajes()">{{showLenguajes?'Hidden Lenguajes': 'Show Lenguajes' }}</button>
    <div *ngIf="showLenguajes">
      <h3>Lenguajes:</h3>
        {{lenguajes}}
      <ul>
        <li *ngFor="let lenguaje of lenguajes">
          {{lenguaje}} 
        </li>
      </ul>
      <form (submit)="addLenguaje(lenguaje.value)">
        <label>Add Lenguaje:</label><br/>
        <input type="text" #lenguaje /><br/>
      </form>
    </div>
    <hr>
    <h3>Edit User</h3>
    <form>
      <label>Name:</label><br/>
      <input type="text" name="name" [(ngModel)]="name" /><br/>
      <label>Email:</label><br/>
      <input type="text" name="email" [(ngModel)]="email" /><br/>
      <label>Address:</label><br/>
      <input type="text" name="address.street" [(ngModel)]="address.street" /><br/>
      <label>Neighborhood:</label><br/>
      <input type="text" name="address.neighborhood" [(ngModel)]="address.neighborhood" /><br/>
      <label>City:</label><br/>
      <input type="text" name="address.city" [(ngModel)]="address.city" /><br/>
    </form>
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

  toggleLanguajes(){
    if(this.showLenguajes == true){
      this.showLenguajes = false;
    }else {
      this.showLenguajes = true;
    }
  }

  addLenguaje(lenguaje){
    console.log('lenguaje', lenguaje);
    this.lenguajes.push(lenguaje);
  }

 }

interface address {
    street: string,
    neighborhood: string,
    city: string
}