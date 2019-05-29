import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL = 'http://127.0.0.1:8080/api';

  constructor(private http:HttpClient, private storage:Storage) { }

  getPosts(jwtToken:string) {
    const httpOptions = {
      headers: new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Authorization', jwtToken)
    };
    return new Promise(resolve => {
      this.http.get<Post[]>(this.baseURL + '/posts/get', httpOptions).subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        });
      });
  }

  postMessage(message:string, jwtToken:string) {
    let postData = {
      'message': message
    };
    const httpOptions = {
      headers: new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Authorization', jwtToken)
    };
    return new Promise(resolve => {
      this.http.post<Post[]>(this.baseURL + '/posts/add', postData, httpOptions).subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        });
      });
  }

  getJWTToken(username:string, password:string) {
    let credentials = {
      username: username,
      password: password
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.baseURL + '/auth/login', credentials, { headers: headers, observe: 'response'}).subscribe(
        (resp) => {
          let token:string = resp.headers.get('Authorization');
          this.storage.set('jwtToken', token);
          console.log(token);
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
