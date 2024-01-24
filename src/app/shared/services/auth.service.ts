import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  
  
  constructor(private http: HttpClient) {
    super("autenticar");
  }

  logar(form: any): Observable<any> {
    return this.http.post(`${this.endPoint}/logar`, { form }, {responseType: 'text'});
  }

  cadastrar(form: any) {
    console.log(form);
    
    return this.http.post(`${this.endPoint}/cadastrar`, { form });
  }

}
