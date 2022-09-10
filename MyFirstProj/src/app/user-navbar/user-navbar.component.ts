import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  data:string = "Hello World";
  imgPath = "../../assets/829466_man_512x512.png";
  isDisabled:boolean = true;
  x:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
