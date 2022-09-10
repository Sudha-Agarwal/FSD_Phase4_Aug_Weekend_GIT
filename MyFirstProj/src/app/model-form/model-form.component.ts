import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder  } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  

  userForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

   form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])       
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }

}