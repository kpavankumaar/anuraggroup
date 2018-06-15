import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentInfoService } from '../../shared/studentinfo.service';

@Component({
    selector: 'app-student-thumbnail',
    template: `<h3> welcome to student thumbnail</h3>
            <div class="row">
                <div class="col well border" *ngFor = 'let student of studentInfo'>
                    <label>Id: </label> {{student.id}}<br>
                    <label>Name: </label> {{student.name}}<br>
                    <label>Email: </label> {{student.email}}
                    <br>
                    <label>PhoneNumber </label> {{student.phoneNumber}}
                    <br>
                    <label>City </label> {{student.city}}
                    <br>
                    <label>PhoneNumber </label> {{student.phoneNumber}}
                    <br>
                    <label>yearOfpass </label> {{student.yearOfpass}}
                    <br>
                    <label>OrganizationName </label> {{student.OrganizationName}}
                    <br>
                    <label>technologies </label> {{student.technologies}}
                    <br>
                </div>
            </div>
    `
})

export class StudentThumbnailComponent {
    studentInfo;
    constructor(public studentInfoService: StudentInfoService) {
        this.studentInfo = studentInfoService.getStudentInfo();
    }

}
