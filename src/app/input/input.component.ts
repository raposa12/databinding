import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //usando os recurso pai prinnpal para o filho principal
  @Input('principal') principal! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
