import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { FormsModule } from '@angular/forms';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoEnderecoComponent } from './produto-endereco/produto-endereco.component';
import { ProdutoDestaqueComponent } from './produto-destaque/produto-destaque.component';
import { ProdutoInformacoesComponent } from './produto-informacoes/produto-informacoes.component';
import { ProdutoImagemComponent } from './produto-imagem/produto-imagem.component';
import { ProdutoDescricaoComponent } from './produto-descricao/produto-descricao.component';
import { ProdutoValorComponent } from './produto-valor/produto-valor.component';
import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';


@NgModule({
  declarations: [
    ProdutoListagemComponent,
    ProdutoDetalheComponent,
    ProdutoEnderecoComponent,
    ProdutoDestaqueComponent,
    ProdutoInformacoesComponent,
    ProdutoImagemComponent,
    ProdutoDescricaoComponent,
    ProdutoValorComponent,
    ProdutoCadastrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
