import {Component} from '@angular/core';

export type StudentModel = {
  lp: number,
  imie: string,
  nazwisko: string,
  dataUrodzenia: string
}

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrls: ['./page-student-list.component.css']
})
export class PageStudentListComponent {
  studentList: StudentModel[] = [];

  constructor() {
    this.studentList = [
      {
        lp: 1,
        imie: 'Pawel',
        nazwisko: 'Gawel',
        dataUrodzenia: '2022-01-05'
      },
      {
        lp: 2,
        imie: 'Gawel',
        nazwisko: 'Pawel',
        dataUrodzenia: '2022-01-05'
      },
      {
        lp: 3,
        imie: 'Pawelek',
        nazwisko: 'Gawelek',
        dataUrodzenia: '2022-01-05'
      },
    ]
  }
}
