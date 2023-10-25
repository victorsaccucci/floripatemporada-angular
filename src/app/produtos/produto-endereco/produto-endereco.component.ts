import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/shared/service/DadosCompartilhadosService';
import { Endereco } from 'src/app/shared/model/Endereco';

@Component({
  selector: 'app-produto-endereco',
  templateUrl: './produto-endereco.component.html',
  styleUrls: ['./produto-endereco.component.scss']
})
export class ProdutoEnderecoComponent implements OnInit{

  pais: string = '';
  cidade: string = '';
  estado: string = '';
  rua: string = '';
  cep: string = '';
  bairro: string = '';
  numero: number = 0;

  endereco: Endereco = new Endereco();

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosService) { }

  avancar() {

    //if (this.pais && this.cidade && this.estado && this.rua && this.cep && this.bairro && this.numero) {
      this.dadosCompartilhadosService.setEndereco(
        this.pais, this.cidade, this.estado, this.rua, this.numero, this.bairro, this.rua);

      console.log('Pais:', this.pais);
      console.log('Cidade:', this.cidade);
      console.log('Estado:', this.estado);
      console.log('Rua:', this.rua);
      console.log('CEP:', this.cep);
      console.log('Bairro:', this.bairro);
      console.log('Número:', this.numero);

      this.router.navigate(['/destaques']);
    //} else {
     // alert('Por favor, preencha o título e a descrição antes de avançar.');
   // }
  }

  ngOnInit(): void {
    this.endereco = this.dadosCompartilhadosService.getEndereco();
  }

}
