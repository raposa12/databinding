import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariogrupoaninhado',
  templateUrl: './formulariogrupoaninhado.component.html',
  styleUrls: ['./formulariogrupoaninhado.component.css']
})
export class FormulariogrupoaninhadoComponent implements OnInit {

  dadosPessoais!: FormGroup;
  /*dadosPessoais = new FormGroup({
    nome: new FormControl(''),
    sobreNome: new FormControl(''),

    //outro grpupo de formularios dentro de um grupo de formulario
    endereco: new FormGroup({
      rua: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      cep: new FormControl('')
    })
  });*/

  mostrarValores(){
    console.warn(this.dadosPessoais.value);
  }

  constructor(private fb: FormBuilder) { }

  
  /*emailDominioValidator(control: FormControl) {
    let email = control.value;
    if (email &&  email.index("@") != -1) {
      let [, dominio] = email.split("@");
      if (dominio !== "udemy.com") {
        return {
          emailDominio: {
            parseDominio: dominio
          }
        }
      }
    }
    return null;
  }*/

  get f(){return this.dadosPessoais.controls}

  ngOnInit(): void {
    //outro jeito de fazer bem mais reduzida
  this.dadosPessoais = this.fb.group({
    nome: ['',Validators.required, Validators.minLength(3)],
    sobreNome: ['',Validators.required, Validators.minLength(3)],
    email: ['', Validators.required, Validators.email],

    //outro grpupo de formularios dentro de um grupo de formulario
    endereco: this.fb.group({
      rua: [''],
      cidade: [''],
      estado: [''],
      cep: ['']
    })
  });

  }

}
