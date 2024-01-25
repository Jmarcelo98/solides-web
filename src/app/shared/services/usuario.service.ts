import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {

  constructor(private http: HttpClient) {
    super("usuarios");
  }

  criar(form: any) {
    return this.http.post(`${this.endPoint}`, form);
  }

}
