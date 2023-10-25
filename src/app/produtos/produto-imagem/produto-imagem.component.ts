import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Imagem } from 'src/app/shared/model/Imagem';

@Component({
  selector: 'app-produto-imagem',
  templateUrl: './produto-imagem.component.html',
  styleUrls: ['./produto-imagem.component.scss']
})
export class ProdutoImagemComponent {
  constructor(private router : Router, private dadosCompartilhadosService: DadosCompartilhadosService) { }

  imagem1 : Blob
  imagem2 : Blob
  imagem3 : Blob
  imagem4 : Blob

  clickImagem1(){
    this.dadosCompartilhadosService.setImagem1(this.imagem1);
  }
  clickImagem2(){
    this.dadosCompartilhadosService.setImagem2(this.imagem2);
  }
  clickImagem3(){
    this.dadosCompartilhadosService.setImagem3(this.imagem3);
  }
  clickImagem4(){
    this.dadosCompartilhadosService.setImagem4(this.imagem4);
  }

  avancar() {

    this.clickImagem1();
    this.clickImagem2();
    this.clickImagem3();
    this.clickImagem4();

    this.router.navigate(['/valor']);
  }
}

