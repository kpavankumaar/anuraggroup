import { Routes } from '@angular/router';
import { UserComponent } from './usercomponent';
import { LoginComponent } from './logincomponent';

export const userroutes: Routes =  [
    {path: 'profile', component: UserComponent},
    {path: 'login', component: LoginComponent }
];
