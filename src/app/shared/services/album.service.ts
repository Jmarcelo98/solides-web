import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService {
  
  constructor(private http: HttpClient) {
    super("album");
  }

  buscarTodos() {
    return this.http.get<any>(`${this.endPoint}/todos`);
  }

}
