import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHobbyComponent } from './new-hobby/new-hobby.component';
import { PostComponent } from './post/post.component';
import { AllHobbiesComponent } from './all-hobbies/all-hobbies.component';
import { RouterModule } from '@angular/router';
import { HobbyRoutingModule } from './hobby-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewHobbyComponent,
    PostComponent,
    AllHobbiesComponent,
  ],
  imports: [
    CommonModule,
    HobbyRoutingModule,
    FormsModule
  ]
})
export class HobbyModule { }
