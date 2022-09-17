import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:any;
  courses1:any;
  constructor(private ds: DataServiceService) { }

  ngOnInit(): void {
    this.ds.getCourse().subscribe( {next: response => this.courses = response,
      error: err => console.log(err),
      complete: ()=>console.log("done")});
  }

}
