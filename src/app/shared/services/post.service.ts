import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {
  
  constructor(private http: HttpClient) {
    super("post");
  }

  buscarTodos(form: any): Observable<any> {
    return this.http.get<any>(`${this.endPoint}`, form);
  }

  criar(form: any) {
    return this.http.post(`${this.endPoint}`, form);
  }

}
