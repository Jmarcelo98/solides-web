import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/models/interface/Paginator';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(private http: HttpClient) {
    super("posts");
  }

  buscarTodos(form: any, paginator: Paginator): Observable<any> {
    var params = this.setPageToHttpParam(paginator)
    return this.http.post<any>(`${this.endPoint}/filtro`, form, { params: params });
  }

  criar(form: any) {
    return this.http.post<any>(`${this.endPoint}`, form);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }

  deletar(id: number) {
    return this.http.delete(`${this.endPoint}/${id}`);
  }

}
