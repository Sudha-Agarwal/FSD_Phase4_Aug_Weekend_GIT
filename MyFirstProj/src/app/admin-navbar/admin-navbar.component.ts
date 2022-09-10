import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  data:string = "Hello World";
  imgPath = "../../assets/829466_man_512x512.png";
  isDisabled:boolean = true;
  x:number = 10;

  constructor() { }

  ngOnInit(): void {

    if(this.x == 11){
      this.isDisabled = true;

    }
    else{
      this.isDisabled = false;
    }

  }

}
