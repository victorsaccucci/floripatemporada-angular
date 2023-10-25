import { ImagemService } from './../../shared/service/ImagemService';
import { Produto } from 'src/app/shared/model/Produto';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/shared/service/produtos.service';
import { Imagem } from 'src/app/shared/model/Imagem';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.scss']
})
export class ProdutoCadastrarComponent {

  constructor(private imagemService : ImagemService, private produtosService: ProdutosService, private dadosCompartilhadosService : DadosCompartilhadosService) { }

  finalizarCadastro() {

    const especificacoes = this.dadosCompartilhadosService.getEspecificacoes();
    const destaquesCasa = this.dadosCompartilhadosService.getDestaquesCasa();
    const tituloDescricao = this.dadosCompartilhadosService.getTituloDescricao();
    const endereco = this.dadosCompartilhadosService.getEndereco();
    const informacoes = this.dadosCompartilhadosService.getInformacoes();
    const valor = this.dadosCompartilhadosService.getValor();

    const imagem1 = this.dadosCompartilhadosService.getImagem1();
    const imagem2 = this.dadosCompartilhadosService.getImagem2();
    const imagem3 = this.dadosCompartilhadosService.getImagem3();
    const imagem4 = this.dadosCompartilhadosService.getImagem4();

    const produto = new Produto();
    produto.titulo = tituloDescricao.titulo;
    produto.descricao = tituloDescricao.descricao;
    produto.endereco = endereco;
    produto.especificacoes = especificacoes;
    produto.destaquesCasa = destaquesCasa;
    produto.hospedes = informacoes.hospedes;
    produto.animais = informacoes.animais;
    produto.quartos = informacoes.quartos;
    produto.camas = informacoes.camas;
    produto.banheiros = informacoes.banheiros;
    produto.valor = valor.valor;


    this.imagemService.salvar(imagem1).subscribe(
      (imagemSalva) => {

        console.log('Produto cadastrado com sucesso:', imagemSalva);

      },
      (error) => {

        console.error('Erro ao cadastrar a imagem:', error);
      }
    );
    this.imagemService.salvar(imagem2).subscribe(
      (imagemSalva) => {

        console.log('Produto cadastrado com sucesso:', imagemSalva);

      },
      (error) => {

        console.error('Erro ao cadastrar a imagem:', error);
      }
    );
    this.imagemService.salvar(imagem3).subscribe(
      (imagemSalva) => {

        console.log('Produto cadastrado com sucesso:', imagemSalva);

      },
      (error) => {

        console.error('Erro ao cadastrar a imagem:', error);
      }
    );
    this.imagemService.salvar(imagem4).subscribe(
      (imagemSalva) => {

        console.log('Produto cadastrado com sucesso:', imagemSalva);

      },
      (error) => {

        console.error('Erro ao cadastrar a imagem:', error);
      }
    );


    this.produtosService.salvar(produto).subscribe(
      (produtoSalvo) => {

        console.log('Produto cadastrado com sucesso:', produtoSalvo);

      },
      (error) => {

        console.error('Erro ao cadastrar o produto:', error);
      }
    );
  }


}
