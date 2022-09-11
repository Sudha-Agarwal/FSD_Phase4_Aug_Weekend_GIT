import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LaptopListComponent } from './product-list/laptop-list/laptop-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    HomeComponent,
    LoginFormComponent,
    TemplateFormComponent,
    ModelFormComponent,
    CourseComponent,
    AddCourseComponent,
    CourseDetailComponent,
    RegisterationFormComponent,
    UserNavbarComponent,
    ProductListComponent,
    LaptopListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
