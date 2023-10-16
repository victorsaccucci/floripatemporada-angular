import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  private readonly API = "http://localhost:8080/api/produtos";

  constructor(private httpClient : HttpClient) { }

  listarTodos(): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(this.API);
  }
}
