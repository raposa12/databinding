import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  life = 'Gancho de vida'
  title = 'Data Binding';
  curso = 'Angular 6'

  principal = 'principal';//delarando variavel principal

  votantes = ['']//lista de votantes

  //variavel de de votantes e valores iniciais
  public concordo: 0 = 0;
  public naoConcordo: 0 = 0;

  //metodo de valores dos votos que concondam e  naoConcordam
  foiVotado(concordo : boolean){
    concordo ? this.concordo++ : this.naoConcordo++;
  }
}
