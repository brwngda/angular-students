import {Component} from '@angular/core';
import {StudentService} from "../student-service/student.service";

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrls: ['./page-student-list.component.css']
})
export class PageStudentListComponent {

  constructor(protected studentService: StudentService) {
  }
}

