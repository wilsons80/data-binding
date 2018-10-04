import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'contador'
  ,templateUrl: './output-property.component.html'
  ,styleUrls: ['./output-property.component.css']
  //,outputs:['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  //Usado para que o componente FILHO possa passar informações OU eventos para o componente PAI
  //Nova forma de passar eventos (antes era o broadcast)
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') valorCampoInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }


  incrementa(){
    console.log(this.valorCampoInput.nativeElement.value);
    this.valorCampoInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valorCampoInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
