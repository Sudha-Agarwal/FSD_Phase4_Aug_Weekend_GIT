import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  itemPrice: number = 5.50;


  filterBy: any;
  usersList$: Observable<any[]>;
  searchText:any;

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
    this.usersList$ = this.ds.getDataforFilterPipe();

   
  }



}
