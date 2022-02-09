import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

    //aqui ele começou com o valor da variavel false 
  mostrarVersaoAtual: boolean = false;

  //metodo para mudar versao ele começa com falso e quando clicar ele muda pra verdadeiro
  mudarVersao(){
    this.mostrarVersaoAtual = !this.mostrarVersaoAtual;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
