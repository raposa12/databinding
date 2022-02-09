import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  /*output pai */
  @Output() enviaVoto = new EventEmitter<boolean>();//para emitir um evento de voto
  foiVotado = false;//começa sem voto 

  vote(concorda: boolean){
    this.enviaVoto.emit(concorda);//para emitir um evento de voto concordar
    this.foiVotado = true;//para mostrar o valor do voto na tela 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
