import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guard/auth.activate';
import { AllHobbiesComponent } from './all-hobbies/all-hobbies.component';
import { NewHobbyComponent } from './new-hobby/new-hobby.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
    {
        path: 'hobbies',
        children: [
            {
                path: 'all',
                component: AllHobbiesComponent
            },

            {
                path: ':hobbyId',
                component: PostComponent
            }
        ]
    },
    {
        path: 'new-hobby',
        component: NewHobbyComponent,
        canActivate: [AuthActivate],
        data: {
           authenticationRequired: true,
           uthenticationFailureRedirectUrl: '/login'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HobbyRoutingModule { }