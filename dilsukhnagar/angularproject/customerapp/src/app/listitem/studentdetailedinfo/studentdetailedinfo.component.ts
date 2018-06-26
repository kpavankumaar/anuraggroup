import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../../shared/studentinfo.service';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
    selector: 'app-studentdetailedinfo',
    template: `<h2>app student detailed info</h2>
                <div class = 'container'>
                    <div class = 'border'>
                        <label>Student id : </label>{{studentDetails.id }}<br>
                        <label>Student name : </label>{{studentDetails.name }}
                    </div>
                </div>
    `
})
export class StudentDetailedInfoComponent implements OnInit {
    studentDetails;
    constructor(public studentInfoService: StudentInfoService, public activatedRoute: ActivatedRoute, public router: Router) {
        // console.log(route);
    }
    ngOnInit() {
        // console.log(this.route);
        // console.log( );
        this.studentDetails = this.studentInfoService.getStudentInfo().find(event => event.id === +this.activatedRoute.snapshot.params.id );
        console.log(!this.studentDetails);
        if (!this.studentDetails) {
            this.router.navigate(['/404']);
        }
    }
}
