import { Component } from '@angular/core';
import { StudentInfoService } from './shared/studentinfo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentInfo;
  constructor(public studentInfoService: StudentInfoService) {
    this.studentInfo = this.studentInfoService.getStudentInfo();
  }
  newInputVal(val) {
    console.log(val);
  }
}
