import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './registration/registration.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private registrationUrl:string="https://7e5f-183-82-102-74.ngrok-free.app/savestudent";
  constructor(private http:HttpClient) { }

  createStudent(student: Student):Observable<Student> {

    return this.http.post<Student>(`${this.registrationUrl}`,student);

  }

}
