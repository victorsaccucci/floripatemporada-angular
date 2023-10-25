import { Produto } from 'src/app/shared/model/Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../model/Imagem';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  private readonly API = "http://localhost:8080/api/imagem";

  constructor(private httpClient : HttpClient) { }

  salvar(imagem: Imagem): Observable<Imagem> {
    return this.httpClient.post<Imagem>(this.API, imagem);
  }
}
