import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Produto } from 'src/app/shared/model/Produto';

@Component({
  selector: 'app-produto-informacoes',
  templateUrl: './produto-informacoes.component.html',
  styleUrls: ['./produto-informacoes.component.scss']
})
export class ProdutoInformacoesComponent implements OnInit {

  @ViewChild('numHospedesInput') numHospedesInput: ElementRef;
  @ViewChild('temAnimaisInput') temAnimaisInput: ElementRef;
  @ViewChild('numQuartosInput') numQuartosInput: ElementRef;
  @ViewChild('numCamasInput') numCamasInput: ElementRef;
  @ViewChild('numBanheirosInput') numBanheirosInput: ElementRef;

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosService) { }

  avancar() {
    // Obtenha os valores dos campos
    const numHospedes = this.numHospedesInput.nativeElement.value;
    const temAnimais = this.temAnimaisInput.nativeElement.value;
    const numQuartos = this.numQuartosInput.nativeElement.value;
    const numCamas = this.numCamasInput.nativeElement.value;
    const numBanheiros = this.numBanheirosInput.nativeElement.value;


    let produto: Produto = this.dadosCompartilhadosService.getInformacoes();

    if (!produto) {
      produto = new Produto();
    }

    produto.hospedes = numHospedes;
    produto.animais = temAnimais;
    produto.quartos = numQuartos;
    produto.camas = numCamas;
    produto.banheiros = numBanheiros;

    console.log(produto)

    this.dadosCompartilhadosService.setInformacoes(produto);

    this.router.navigate(['/descricao']);
  }

  ngOnInit(): void {

  }

  aumentarValor(inputRef: HTMLInputElement) {
    const valorAtual = parseInt(inputRef.value || '0', 10);
    inputRef.value = (valorAtual + 1).toString();
  }
}
