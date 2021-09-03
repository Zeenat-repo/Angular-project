import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Users } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  URL = "http://localhost:3000/Users";
  constructor(private http: HttpClient) { }
  
  getUsers(){
   return  this.http.get(this.URL); 
  }
  addUsers(data: any){
    return this.http.post(this.URL,data);
  }
}
