import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'user',
  template: `
    <h1>{{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.neighborhood}} {{address.city}} </p>
    <button (click)="toggleLanguajes()">{{showLanguages?'Hidden Languages': 'Show Languages' }}</button>
    <div *ngIf="showLanguages">
      <h3>languages:</h3>
        {{languages}}
      <ul>
        <li *ngFor="let language of languages; let i = index">
          {{language}} <button (click)="deleteLanguage(i)">x</button>
        </li>
      </ul>
      <form (submit)="addlanguage(language.value)">
        <label>Add language:</label><br/>
        <input type="text" #language /><br/>
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
  providers: [ PostService ]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  languages: string[];
  showLanguages: boolean;

  constructor(private postService: PostService){
    this.name = 'papapapapa';
    this.email = 'paolazaratem@gmail.com';
    this.address = {
      street: 'neu krugalle',
      neighborhood: 'kopenick',
      city: 'Berlin'
    }
    this.languages = ['Java', 'C', 'Go', 'C++'];
    this.showLanguages = false;

    this.postService.getPosts().subscribe( posts => {
      console.log('posts', posts);
    });
  }

  toggleLanguajes(){
    if(this.showLanguages == true){
      this.showLanguages = false;
    }else {
      this.showLanguages = true;
    }
  }

  addlanguage(language){
    console.log('language', language);
    this.languages.push(language);
  }

  deleteLanguage(i){
    this.languages.splice(i,1);
    console.log('this.languages', this.languages);
  }

 }

interface address {
    street: string,
    neighborhood: string,
    city: string
}