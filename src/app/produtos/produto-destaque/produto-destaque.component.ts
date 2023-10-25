import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/model/Card';
import { Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { DestaquesCasa } from 'src/app/shared/model/DestaquesCasa';

@Component({
  selector: 'app-produto-destaque',
  templateUrl: './produto-destaque.component.html',
  styleUrls: ['./produto-destaque.component.scss']
})
export class ProdutoDestaqueComponent implements OnInit {

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosService) { }

  destaques: DestaquesCasa = new DestaquesCasa();

  avancar() {

    this.atualizarEspecificacoes()

    this.dadosCompartilhadosService.setDestaquesCasa(this.destaques);
    console.log(this.destaques)

    this.router.navigate(['/informacoes']);
  }

  cards: Card[] = [
    { id: 1, title: 'Card 1', selected: false },
    { id: 2, title: 'Card 2', selected: false },
    { id: 3, title: 'Card 3', selected: false },
    { id: 4, title: 'Card 4', selected: false },
    { id: 5, title: 'Card 5', selected: false },
    { id: 6, title: 'Card 6', selected: false },
    { id: 7, title: 'Card 7', selected: false },
    { id: 8, title: 'Card 8', selected: false },
    { id: 9, title: 'Card 9', selected: false }
  ];


  toggleSelection(card: Card) {
    card.selected = !card.selected;
  }


  private atualizarEspecificacoes() {
    this.destaques.arcondicionado = this.cards[0].selected;
    this.destaques.churrasqueira = this.cards[1].selected;
    this.destaques.cozinha = this.cards[2].selected;
    this.destaques.piscina = this.cards[3].selected;
    this.destaques.acessoAPraia = this.cards[4].selected;
    this.destaques.piscina = this.cards[6].selected;
    this.destaques.tv = this.cards[7].selected;
    this.destaques.wifi = this.cards[8].selected;
  }

  ngOnInit(): void {
  }
}
