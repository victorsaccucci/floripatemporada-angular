import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-produto-valor',
  templateUrl: './produto-valor.component.html',
  styleUrls: ['./produto-valor.component.scss']
})
export class ProdutoValorComponent {

  constructor(private router : Router, private dadosCompartilhadosService : DadosCompartilhadosService){}

  valor: number = 0;


  avancar(){

    this.dadosCompartilhadosService.setValor(this.valor);

    console.log(this.valor);

    this.router.navigate(['/finalizar']);
  }

}
