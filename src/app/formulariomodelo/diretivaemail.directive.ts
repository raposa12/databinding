import { Validacao } from './../validators';
import { ValidatorFn, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
import { Validator } from '@angular/forms';

//Diretiva para validar formulario*/
@Directive({
  selector: '[appDiretivaemail]',
  providers: [{
    provide: NG_VALIDATORS,useExisting: DiretivaemailDirective, multi:true
  }]
})
export class DiretivaemailDirective implements Validator{
//Diretiva para validar formulario*/
  validator: ValidatorFn;
  constructor() { 
    this.validator = Validacao.validarEmailModelo();
  }

  validate(c: FormControl) {
      return this.validator(c);
  }
}
