import { Imagem } from './../model/Imagem';
import { Produto } from 'src/app/shared/model/Produto';
import { Injectable } from '@angular/core';
import { Especificacoes } from '../model/Especificacoes';
import { Endereco } from '../model/Endereco';
import { DestaquesCasa } from '../model/DestaquesCasa';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosService {

  private especificacoes: Especificacoes = new Especificacoes();
  private destaquesCasa: DestaquesCasa = new DestaquesCasa();
  private tituloDescricao: Produto = new Produto();
  private endereco: Endereco = new Endereco();


  private informacoes: Produto = new Produto();
  private valor: Produto = new Produto();

  private imagem1 : Imagem = new Imagem();
  private imagem2 : Imagem = new Imagem();
  private imagem3 : Imagem = new Imagem();
  private imagem4 : Imagem = new Imagem();

  setImagem1(arquivo1: Blob) {
    this.imagem1.arquivo  = arquivo1;
  }

  getImagem1(): Imagem {
    return this.imagem1;
  }

  setImagem2(arquivo2: Blob) {
    this.imagem2.arquivo  = arquivo2;
  }

  getImagem2(): Imagem {
    return this.imagem2;
  }

  setImagem3(arquivo3: Blob) {
    this.imagem3.arquivo  = arquivo3;
  }

  getImagem3(): Imagem {
    return this.imagem3;
  }

  setImagem4(arquivo4: Blob) {
    this.imagem4.arquivo  = arquivo4;
  }

  getImagem4(): Imagem {
    return this.imagem4;
  }

  setTituloDescricao(titulo: string, descricao: string) {
    this.tituloDescricao.titulo = titulo;
    this.tituloDescricao.descricao = descricao;
  }

  getTituloDescricao(): { titulo: string, descricao: string } {
    return { titulo: this.tituloDescricao.titulo, descricao: this.tituloDescricao.descricao };
  }

  setEndereco(pais: string, cidade: string, estado: string, cep: string, numero: number, bairro: string, rua: string) {
    this.endereco.pais = pais;
    this.endereco.cidade = cidade;
    this.endereco.estado = estado;
    this.endereco.cep = cep;
    this.endereco.numero = numero;
    this.endereco.bairro = bairro;
    this.endereco.rua = rua;
  }

  getEndereco(): Endereco {
    return this.endereco;
  }

  setValor(valor: number) {
    this.valor.valor  = valor;
  }

  getValor(): Produto {
    return this.valor;
  }


  setEspecificacoes(especificacoes: Especificacoes) {
    this.especificacoes = especificacoes;
  }

  getEspecificacoes() {
    return this.especificacoes;
  }

  setDestaquesCasa(destaquesCasa: DestaquesCasa) {
    this.destaquesCasa = destaquesCasa;
  }

  getDestaquesCasa(): DestaquesCasa {
    return this.destaquesCasa;
  }

  getInformacoes() {
    return this.informacoes;
  }

  setInformacoes(produto: Produto) {
    this.informacoes = produto;
  }
}
