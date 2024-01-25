import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService extends BaseService {

  constructor(private http: HttpClient) {
    super("comentarios");
  }

  criar(form: any) {
    return this.http.post(`${this.endPoint}`, form);
  }

}
