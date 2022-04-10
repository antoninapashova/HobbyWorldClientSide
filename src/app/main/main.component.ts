import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../shared/interfaces/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  
  @Input() title!: string;
  @Input() posts: IPost[] | undefined
  constructor() { }
}
