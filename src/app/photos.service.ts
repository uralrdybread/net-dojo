import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public getAllPhotos (){
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }

  constructor(private http: HttpClient) { }
}
