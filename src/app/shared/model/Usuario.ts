import { Produto } from './produto'
import { Sexo } from './sexo';

export class Usuario {
    id: number;
    foto: string; // Use o tipo apropriado para armazenar a imagem, como base64
    nome: string;
    sobrenome: string;
    email: string;
    sexo: Sexo;
    cpf: string;
    telefone: string;
    senha: string;
    produtos: Produto[];
}
