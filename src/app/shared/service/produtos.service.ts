import { Produto } from 'src/app/shared/model/Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../model/Imagem';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  private readonly API = "http://localhost:8080/api/produtos";

  constructor(private httpClient : HttpClient) { }

  listarTodos(): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(this.API);
  }

  listarImagens(): Observable<Array<Imagem>>{
    return this.httpClient.get<Array<Imagem>>(this.API + "/imagens")
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.API, produto);
  }


}
