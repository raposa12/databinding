import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  public aplicarClasse = false;//aplicando o estado de aplicarClasse
  public aplicarStyle = true;//aplicando o estado de aplicarStyle

  setarStyle(){
    let styles = {
      /*se aplicar class for igual a vermelho mostra vermelho se nao fica transparente*/
      'background-color': this.aplicarStyle ? 'red' : 'transparent',
      'font-weight' : this.aplicarStyle ? 'bold' : 'normal'
    }
    return styles
  }

  constructor() { }

  ngOnInit(): void {
  }

}
