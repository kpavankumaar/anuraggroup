import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './usercomponent';
import { LoginComponent } from './logincomponent';
import { userroutes } from './userroutes';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(userroutes), FormsModule
    ],
    declarations: [
        UserComponent,
        LoginComponent
    ]

})
export class UserModule {
    constructor() {
    }
}
