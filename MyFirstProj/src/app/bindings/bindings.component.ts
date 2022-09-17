import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  classesToApply: string = "boldClass italicClass";
  isBold:boolean = true;

  isDelightful: boolean = true;
  isGlitter:  boolean = true;

  titleStyle = 'green';
  titleStyle_exist:boolean = false;

  ApplyBoldClass: boolean = true;
    ApplyItalicsClass: boolean = true;


  get AddCSSClasses() {
    let Cssclasses = {
        boldClass: this.ApplyBoldClass,
        italicClass: this.ApplyItalicsClass
    };
    return Cssclasses;
}

  TitleStyles = {
    'color': 'blue',
    'font-size': '4em'   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
