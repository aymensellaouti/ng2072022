import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  /*
    1- Créer un event
  */
  @Output() sendDataToPapa = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    /*
      2- Emis l'event avec du data dedans
    */
    this.sendDataToPapa.emit('cc papa');
  }

}
