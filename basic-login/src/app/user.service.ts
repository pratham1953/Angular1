import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserModel } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiurl='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

    getUsers(){
      return this.http.get<UserModel[]>(this.apiurl)
    }
}
