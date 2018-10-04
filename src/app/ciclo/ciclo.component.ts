import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges {

  constructor() {
    console.log('construtor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

}
