import { Endereco } from './Endereco';
import { Imagem } from './Imagem';
import { Especificacoes } from './Especificacoes';
import { DestaquesCasa } from './DestaquesCasa';
import { Usuario } from './Usuario';

export class Produto {
    id: number;
    titulo: string;
    descricao: string;
    endereco: Endereco;
    animais: number;
    hospedes: number;
    quartos: number;
    banheiros: number;
    camas: number;
    imagens: Imagem[];
    valor: number;
    especificacoes: Especificacoes;
    destaquesCasa: DestaquesCasa;
    usuario: Usuario;

}
