import { Produto } from 'src/app/shared/model/Produto';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/shared/service/produtos.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.scss']
})
export class ProdutoCadastrarComponent {

  constructor(private produtosService: ProdutosService, private dadosCompartilhadosService : DadosCompartilhadosService) { }

  finalizarCadastro() {

    const especificacoes = this.dadosCompartilhadosService.getEspecificacoes();
    const destaquesCasa = this.dadosCompartilhadosService.getDestaquesCasa();
    const tituloDescricao = this.dadosCompartilhadosService.getTituloDescricao();
    const endereco = this.dadosCompartilhadosService.getEndereco();
    const imagens = this.dadosCompartilhadosService.getImagem();
    const informacoes = this.dadosCompartilhadosService.getInformacoes();
    const valor = this.dadosCompartilhadosService.getValor();


    const produto = new Produto();
    produto.titulo = tituloDescricao.titulo;
    produto.descricao = tituloDescricao.descricao;
    produto.endereco = endereco;
    produto.especificacoes = especificacoes;
    produto.destaquesCasa = destaquesCasa;
    produto.imagens = imagens;
    produto.hospedes = informacoes.hospedes;
    produto.animais = informacoes.animais;
    produto.quartos = informacoes.quartos;
    produto.camas = informacoes.camas;
    produto.banheiros = informacoes.banheiros;
    produto.valor = valor.valor;


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
