import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL = 'http://127.0.0.1:8080/api/posts';

  constructor(private http:HttpClient, private storage:Storage) { }

  getPosts() {
    return new Promise(resolve => {
      this.http.get<Post[]>(this.baseURL + '/get').subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        });
      });
  }

  postMessage(message:string) {
    let postData = {
      'message': message
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return new Promise(resolve => {
      this.http.post<Post[]>(this.baseURL + '/add', postData, httpOptions).subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        });
      });
  }

  getJWTToken() {
    let credentials = {
      username: 'jperez',
      password: '123'
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.baseURL + '/auth/login', credentials, { headers: headers, observe: 'response'}).subscribe(
        (resp) => {
          this.storage.set('jwtToken', resp.headers.get('Authorization'));
        },
        (resp) => {
          console.log('resp-error');
          console.log(resp);
        });
      });
  }

}

export interface Post {
  message: string;
}
