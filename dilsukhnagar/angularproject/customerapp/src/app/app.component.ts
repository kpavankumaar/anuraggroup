import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular class';
  url = '../favicon.ico';
  name = 'ravi';
  color = 'red';
  content;
  regions = ['north', 'south', 'east', 'west'];
  regionInfo(event) {
    console.log(event);
    if (event) {
      return this.content = event;
    }
  }



  studentInfo:any = [{
    name: 'pavan',
    phoneNumber : 9666698000,
    email: 'pavankumar@gmail.com ',
    city : 'Hyderabad',
    yearOfpass: '2014',
    OrganizationName: 'Digital lync technologies',
    technologies: 'FullStack'

  }, {
      name: 'ravi',
      phoneNumber: 6666666666,
      email: 'ravikumar@gmail.com ',
      city: 'SecBad',
      yearOfpass: '2014',
      OrganizationName: 'Digital lync technologies',
      technologies: 'Python'

    }, {
      name: 'Srikanth',
      phoneNumber: 9666698888,
      email: 'srk289@gmail.com ',
      city: 'Hyderabad',
      yearOfpass: '2014',
      OrganizationName: 'Digital lync technologies',
      technologies: 'blockchain'

    }];


  changeColor() {
    this.color = this.color === 'red' ? 'grey' : 'red';
  }
  regionMethod(region) {
    alert(region);
    this.regionInfo = region;
  }
  // {name, email , city, college , specialization, year of pass}
}
