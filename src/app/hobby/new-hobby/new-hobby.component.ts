import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoTransformation } from '@cloudinary/url-gen';
import { HobbyService } from 'src/app/hobby.service';

@Component({
  selector: 'app-new-hobby',
  templateUrl: './new-hobby.component.html',
  styleUrls: ['./new-hobby.component.css']
})
export class NewHobbyComponent {

  constructor(hobbyService: HobbyService) { }

  addHobby(ngForm: NgForm):void {
      if(ngForm.invalid){
        return;
      }
      
  }

}
