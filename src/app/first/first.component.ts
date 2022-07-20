import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  monLien = 'facebook.com';
  color = 'yellow';
  isHidden = false;
  /*
    1- Etat représenté par des attributs
    2- Fonctionnement représenté par des méthodes (change mon état)
  */
  constructor() {}

  ngOnInit(): void {}
  sayCc() {
    alert('Cc tout le monde');
  }
  changeColor() {
    this.color = 'red';
  }
  showHide(inputValue: HTMLInputElement) {
    inputValue.value += 'cc ';
    this.isHidden = !this.isHidden;
  }
}
