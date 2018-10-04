import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-curso'
  ,templateUrl: './input-properties.component.html'
  ,styleUrls: ['./input-properties.component.css']
  //,inputs:['nomeCurso:nome']
})
export class InputPropertiesComponent implements OnInit {

  //Usado para que o componente PAI possa passar informações para o componente FILHO
  @Input('nome')  nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
