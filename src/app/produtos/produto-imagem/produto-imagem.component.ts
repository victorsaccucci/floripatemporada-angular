import { Component } from '@angular/core';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Imagem } from 'src/app/shared/model/Imagem';
import { Produto } from 'src/app/shared/model/Produto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto-imagem',
  templateUrl: './produto-imagem.component.html',
  styleUrls: ['./produto-imagem.component.scss']
})
export class ProdutoImagemComponent {

  constructor(private router : Router, private dadosCompartilhadosService: DadosCompartilhadosService) { }

  imagens: Imagem[] = new Array(4);

  handleImageSelect(event: Event, imageNumber: number) {

    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const imagem = new Imagem();
      imagem.imagem = target.files[0];
      imagem.produto = new Produto();
      this.imagens[imageNumber - 1] = imagem;
    }
  }

  avancar() {
    this.dadosCompartilhadosService.setImagem(this.imagens);
    this.router.navigate(['/valor']);
    console.log(this.imagens)
  }
}
