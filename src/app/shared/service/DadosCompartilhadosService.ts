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
  private imagens: Imagem[] = new Array(4);

  private informacoes: Produto = new Produto();
  private valor: Produto = new Produto();

  setImagem(imagens: Imagem[]) {
    this.imagens  = imagens;
  }

  getImagem(): Imagem[] {
    return this.imagens;
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
