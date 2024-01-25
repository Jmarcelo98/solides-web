import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  logar(form: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', form, {responseType: 'text'});
  }

}