import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course = {name:"", author:""};

  constructor(private ds: DataServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.ds.addCourse(this.course).subscribe(response => console.log(response));

  }

}
