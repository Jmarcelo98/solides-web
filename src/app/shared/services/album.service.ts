import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { IPaginator } from '../components/paginacao/paginacao.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService {

  constructor(private http: HttpClient) {
    super("albuns");
  }

  buscarTodos(form: any, paginator: IPaginator) {
    var params = this.setPageToHttpParam(paginator)
    return this.http.post<any>(`${this.endPoint}/filtro`, form, { params: params });
  }

  criar(form: any) {
    return this.http.post(`${this.endPoint}`, form);
  }

  deletar(id: number) {
    return this.http.delete(`${this.endPoint}/${id}`);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }

}
