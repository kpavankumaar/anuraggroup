import { Component } from '@angular/core';
@Component({
    template: `
        <h3>Edit Profile</h3>
        <form >
            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" (ngModel)= 'firstname' name = 'firstname' class="form-control" placeholder="username">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">LastName</label>
                <input type="text" (ngModel)= 'lastname' name = 'lastname' class= "form-control" placeholder="LastName">
            </div>

            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-primary">Cancel</button>
        </form>
    `
})
export class UserComponent {
    firstname: any;
    lastname: any;
    login(logindetails) {
        console.log(logindetails);
    }
}
