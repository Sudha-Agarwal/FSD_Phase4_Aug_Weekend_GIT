import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = "http://localhost:8080";

  constructor(private http_client:HttpClient) { }

  checkLogin(user:any){
    alert("service called");
    //here we would make connection with the server using HttpClient
    return this.http_client.post(this.url + '/users/' + user.email, user)
  }

  createNewUser(user:any){
    let userToSend = {email:user.email, firstName:user.name.firstName,lastName:user.name.lastName,password:user.password};
    return this.http_client.post(this.url + '/createUser', userToSend);
  }

  getCourse(){
    return this.http_client.get(this.url + '/courses')
  }
  addCourse(course:any){
    return this.http_client.post(this.url + '/courses', course);
  }


}
