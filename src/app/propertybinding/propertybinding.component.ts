import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  public urlimg: string = 'https://picsum.photos/200';
  constructor() { }

  ngOnInit(): void {
  }

}
