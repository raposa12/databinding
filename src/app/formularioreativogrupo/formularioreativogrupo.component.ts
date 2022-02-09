import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularioreativogrupo',
  templateUrl: './formularioreativogrupo.component.html',
  styleUrls: ['./formularioreativogrupo.component.css']
})
export class FormularioreativogrupoComponent implements OnInit {

  constructor() { }

  //aqui ele criou as instancias de um grupo de formulario
  pessoaForm = new FormGroup(
    {
      primeiroNome: new FormControl(''),
      ultimoNome: new FormControl('')
    }
  );

  //metodo para enviar os daos dos formularios
  EnviarValores(){
    console.warn(this.pessoaForm.value);
  }

  ngOnInit(): void {
  }

}
