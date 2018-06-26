import { Component } from '@angular/core';
import { AuthService } from './authenticate.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'logincomponent.html'
})
export class LoginComponent {
    constructor(public authService: AuthService, public router: Router) {

    }
    username;
    password;
    login(logindetails) {
        console.log(logindetails.username);
        this.authService.userInformation(logindetails.username);
        this.router.navigate(['studentlist']);
    }

}
