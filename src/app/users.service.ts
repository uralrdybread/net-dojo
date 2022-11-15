import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public getAllUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  public getUser(id:number){
    return this._http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }

  constructor(private _http:HttpClient) { }
}
