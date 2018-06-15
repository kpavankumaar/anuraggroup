import { Injectable } from '@angular/core';

@Injectable()
export class StudentInfoService {
    getStudentInfo() {
        return studentInfo;
    }
}
const studentInfo: any = [
    {   id: 1 ,
        name: 'pavan',
        phoneNumber: 9666698000,
        email: 'pavankumar@gmail.com ',
        city: 'Hyderabad',
        yearOfpass: '2014',
        OrganizationName: 'Digital lync technologies',
        technologies: 'FullStack'

    }, {id: 2,
        name: 'ravi',
        phoneNumber: 6666666666,
        email: 'ravikumar@gmail.com ',
        city: 'SecBad',
        yearOfpass: '2014',
        OrganizationName: 'Digital lync technologies',
        technologies: 'Python'

    }, {id: 3,
        name: 'Srikanth',
        phoneNumber: 9666698888,
        email: 'srk289@gmail.com ',
        city: 'Hyderabad',
        yearOfpass: '2014',
        OrganizationName: 'Digital lync technologies',
        technologies: 'blockchain'

    }];

