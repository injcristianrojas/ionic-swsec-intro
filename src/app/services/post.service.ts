import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL = 'http://127.0.0.1:8080/api/posts/get';

  constructor(private http: HttpClient) { }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.baseURL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
