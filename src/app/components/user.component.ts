import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ PostService ]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  languages: string[];
  showLanguages: boolean;
  posts: Posts [];

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
      this.posts = posts;
    });
  }

  toggleLanguajes(){
    if(this.showLanguages == true){
      this.showLanguages = false;
    }else {
      this.showLanguages = true;
    }
  }

  addlanguage(language: string){
    console.log('language', language);
    this.languages.push(language);
  }

  deleteLanguage(i: number){
    this.languages.splice(i,1);
    console.log('this.languages', this.languages);
  }

 }

interface address {
    street: string,
    neighborhood: string,
    city: string
}

interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string
}