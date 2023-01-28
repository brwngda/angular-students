import {Injectable} from '@angular/core';
import {StudentModel} from "../model/StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: StudentModel[] = []

  constructor() {
    this.studentList.push({
      lp: 1,
      imie: 'pawel',
      nazwisko: 'gawel',
      dataUrodzenia: '2022-01-01'
    })
  }
}
