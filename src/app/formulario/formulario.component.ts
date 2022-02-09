import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //aqui ele criou 2 fromas de valores de formularios
  corFavoritaControl = new FormControl('Preto');
  corFavorita = "vermelho";
  constructor() { }

  ngOnInit(): void {
  }

}
