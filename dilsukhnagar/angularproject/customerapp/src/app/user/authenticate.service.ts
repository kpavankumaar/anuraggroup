import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    userInfo;
    userInformation (username) {
     return this.userInfo = {
        username: username,
        id: 1,
        firstName: 'pavan',
        lastName: 'kumar'
        };
    }
}
