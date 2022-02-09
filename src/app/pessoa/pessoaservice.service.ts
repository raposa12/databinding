import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaserviceService {

  /*exemplo pra criar esse servico dentro desse servico */
  constructor(private logService : LogService) { }

  /*serviço criado do jeitro certo */
  recuperarPessoaLista(): Array<Pessoa>{
    let pessoaLista: Array<Pessoa> = [];
    pessoaLista.push(new Pessoa(1,'Henrrique',30,'Masculino','teste@udemy.com'));
    pessoaLista.push(new Pessoa(2,'Beatriz',30,'Femenino','teste@udemy.com'));
    return pessoaLista;
  }
}
