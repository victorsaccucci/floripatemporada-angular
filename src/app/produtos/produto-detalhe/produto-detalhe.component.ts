import { DadosCompartilhadosService } from './../../shared/service/DadosCompartilhadosService';
import { Card } from 'src/app/shared/model/Card';
import { Especificacoes } from 'src/app/shared/model/Especificacoes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosService) { }

  avancar() {
    this.atualizarEspecificacoes();

    this.dadosCompartilhadosService.setEspecificacoes(this.especificacoes);

    console.log(this.especificacoes);

    this.router.navigate(['/endereco']);
  }

  cards: Card[] = [
    { id: 1, title: 'Casa', selected: false },
    { id: 2, title: 'Apartamento', selected: false },
    { id: 3, title: 'Pousada', selected: false },
    { id: 4, title: 'Fazenda', selected: false },
    { id: 5, title: 'Hotel', selected: false },
    { id: 6, title: 'Microcasa', selected: false }
  ];
  especificacoes: Especificacoes = new Especificacoes();

  toggleSelection(card: Card) {
    card.selected = !card.selected;
  }

  private atualizarEspecificacoes() {
    this.especificacoes.casa = this.cards[0].selected;
    this.especificacoes.apartamento = this.cards[1].selected;
    this.especificacoes.pousada = this.cards[2].selected;
    this.especificacoes.fazenda = this.cards[3].selected;
    this.especificacoes.hotel = this.cards[4].selected;
    this.especificacoes.microcasa = this.cards[5].selected;
  }

  ngOnInit(): void {
  }
}
