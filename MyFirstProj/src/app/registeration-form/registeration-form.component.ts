import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent implements OnInit {

dates:string[]; 
months:any;
emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';



  constructor() { }

  ngOnInit(): void {
    this.dates = ['',"1","2","3"];
    this.months = [{name:"January", value:1},
                  {name:"February", value:2}
                  ]
    
  }

  form = new FormGroup({
    FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern),
      this.emailDomainValidator]),
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    MonthOfBirth: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  });

   
  get f(){
    return this.form.controls;
  }

  submit(){
    alert("hi");
    if (this.form.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.form.value);
    }
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;
    if(email && email.indexOf("@")!= -1){
      let [_, domain] = email.split("@");
      if(domain !== "gmail.com"){
        return {
          emailDomain: {
            parsedDomain: domain
          }
        }
      }
    }
    return null;
  }


}
