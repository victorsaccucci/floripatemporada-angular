import { Endereco } from './endereco';
import { Imagem } from './imagem';
import { Especificacoes } from './especificacoes';
import { DestaquesCasa } from './destaquesCasa';
import { Usuario } from './usuario';

export class Produto {
    id: number;
    titulo: string;
    descricao: string;
    endereco: Endereco;
    animais: boolean;
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
