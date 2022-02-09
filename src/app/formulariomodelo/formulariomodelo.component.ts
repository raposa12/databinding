import { Pessoa } from './../pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariomodelo',
  templateUrl: './formulariomodelo.component.html',
  styleUrls: ['./formulariomodelo.component.css']
})
export class FormulariomodeloComponent implements OnInit {

//Lista para o formulario
pessoa = new Pessoa(1,'Henrrique',30,'Masculino','henrrique@udemy.com');

//começa como falso
enviado = false;

//depos mostra os dados
enviar(){
  this.enviado = true;
}

//quando cliocar no botao adicionar pessoa ele adiciona esse nova lista de atributo
novaPessoa(){
  this.pessoa = new Pessoa(2,'Camila',40,'Femenino','camilla@udemy.com');
}

//para mostrar os dados em forma de json
get diagnostico(){
  return JSON.stringify(this.pessoa);
}

  constructor() { }

  ngOnInit(): void {
  }

}
