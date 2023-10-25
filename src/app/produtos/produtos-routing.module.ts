import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoEnderecoComponent } from './produto-endereco/produto-endereco.component';
import { ProdutoDestaqueComponent } from './produto-destaque/produto-destaque.component';
import { ProdutoInformacoesComponent } from './produto-informacoes/produto-informacoes.component';
import { ProdutoImagemComponent } from './produto-imagem/produto-imagem.component';
import { ProdutoDescricaoComponent } from './produto-descricao/produto-descricao.component';
import { ProdutoValorComponent } from './produto-valor/produto-valor.component';
import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';

const routes: Routes = [
  {path: "", component: ProdutoListagemComponent},
  {path: "detalhe", component: ProdutoDetalheComponent},
  {path: "endereco", component: ProdutoEnderecoComponent},
  {path: "destaques", component: ProdutoDestaqueComponent},
  {path: "informacoes", component: ProdutoInformacoesComponent},
  {path: "imagem", component: ProdutoImagemComponent},
  {path: "descricao", component: ProdutoDescricaoComponent},
  {path: "valor", component: ProdutoValorComponent},
  {path: "finalizar", component: ProdutoCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
