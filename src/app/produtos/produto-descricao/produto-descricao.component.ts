import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';

@Component({
  selector: 'app-produto-descricao',
  templateUrl: './produto-descricao.component.html',
  styleUrls: ['./produto-descricao.component.scss']
})
export class ProdutoDescricaoComponent implements OnInit {
  titulo: string = '';
  descricao: string = '';

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosService) {}

  avancar() {
    if (this.titulo && this.descricao) {
      this.dadosCompartilhadosService.setTituloDescricao(this.titulo, this.descricao);

      console.log('Título:', this.titulo);
      console.log('Descrição:', this.descricao);

      this.router.navigate(['/imagem']);
    } else {
      alert('Por favor, preencha o título e a descrição antes de avançar.');
    }
  }

  ngOnInit(): void {}
}
