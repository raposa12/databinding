import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioreativos',
  templateUrl: './formularioreativos.component.html',
  styleUrls: ['./formularioreativos.component.css']
})
export class FormularioreativosComponent implements OnInit {

  nome = new FormControl('Angular');

  //metodo para atulizar o nome do formulrio
  atualizarNome(){
    this.nome.setValue('Erickson');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
