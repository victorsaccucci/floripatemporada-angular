import { Produto } from 'src/app/shared/model/Produto';
import { ProdutosService } from './../../shared/service/produtos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit{

  public produtos: Array<Produto> = new Array();

  constructor(private produtoService : ProdutosService){
  }

  ngOnInit(): void {
      this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtoService.listarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      },
      erro => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

}
