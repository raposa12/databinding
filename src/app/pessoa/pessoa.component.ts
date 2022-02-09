import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { PessoaserviceService } from './pessoaservice.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  /*Utlizando o servico de lsita de pessoa di jeito errado*/
  pessoaService: PessoaService;
  /*utlizando servico do jeito certo */
  constructor(private pessoaServico: PessoaserviceService) { 
    this.pessoaService = new PessoaService();
  }

  ngOnInit(): void {
    console.log(this.pessoaService.recuperarPessoaLista());
    /*chamando o servico do jeito certo*/
    console.log("DI == ",this.pessoaServico.recuperarPessoaLista());
  }

}
