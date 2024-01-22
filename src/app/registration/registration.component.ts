import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
export class Gaurdian{
  name: string="";
  email: string="";
  mobile:string="";
}
export class Student {
  
 
    firstName: string="";
    lastName:string="";
    emailId: string="";
    gaurdian:Gaurdian=new Gaurdian();
  
      
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
student:Student=new Student();

constructor(private studentService:RegistrationService ){}
onSubmit(){
this.studentService.createStudent(this.student).subscribe(
  
response=>{
  console.log(response);
},
error=>{
  console.log(error);
}

);
}
}
