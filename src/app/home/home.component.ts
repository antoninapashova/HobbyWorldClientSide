import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../hobby.service';
import { IPost } from '../shared/interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  posts: IPost[]|undefined
  
  constructor(private hobbyService: HobbyService) {
    this.fetchPosts();
   }
   
   fetchPosts():void{
     this.posts=undefined;
     this.hobbyService.loadHobbies().subscribe(posts=>this.posts=posts)
   }

}
