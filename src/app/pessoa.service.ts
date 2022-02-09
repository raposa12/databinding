import { Pessoa } from './pessoa';


export class PessoaService{


  /*Criando servico de lista de pessoa do jeito errado*/
  recuperarPessoaLista(): Array<Pessoa>{
    let pessoaLista: Array<Pessoa> = [];
    pessoaLista.push(new Pessoa(1,'Henrrique',30,'Masculino','teste@udemy.com'));
    pessoaLista.push(new Pessoa(2,'Beatriz',30,'Femenino','teste@udemy.com'));
    return pessoaLista;
  }
}