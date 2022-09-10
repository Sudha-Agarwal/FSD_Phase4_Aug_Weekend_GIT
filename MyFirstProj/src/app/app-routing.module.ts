import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "login-form", component: LoginFormComponent},
  {path: "Register", component: RegisterationFormComponent},
  {path: 'courses', component:CourseComponent},
  {path: 'add-course', component:AddCourseComponent},
  {path: 'course-details/:id', component: CourseDetailComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
