import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() cvs: Cv[] = [];
  @Output() forwardItem = new EventEmitter<Cv>();
  constructor() {}

  ngOnInit(): void {}

  forwardCv(cv: Cv) {
    this.forwardItem.emit(cv);
  }
}
