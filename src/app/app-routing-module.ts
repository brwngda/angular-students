import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", redirectTo: "PageMainComponent"},
  { path: "student-list", redirectTo: "PageStudentListComponent"},
  { path: "student-form", redirectTo: "PageStudentFormComponent"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
