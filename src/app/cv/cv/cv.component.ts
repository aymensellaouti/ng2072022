import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  constructor(
    private logger: LoggerService,
    private sayHello: SayHelloService
  ) {}

  ngOnInit(): void {
    this.sayHello.hello();
    this.logger.log('cc je suis le cv component');
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile.png',
        '12345',
        40
      ),
      new Cv(
        2,
        'GUYON',
        'vincent',
        'chef de projet',
        'rotating_card_profile2.png',
        '12345',
        20
      ),
      new Cv(
        3,
        'Livier',
        'Amaury',
        'chef de projet',
        'rotating_card_profile3.png',
        '12345',
        18
      ),
      new Cv(
        4,
        'Livier',
        'Amaury',
        'chef de projet',
        'rotating_card_profile3.png',
        '12345',
        18
      ),
    ];
  }
  getSelectedItem(cv: Cv) {
    this.selectedCv = cv;
  }
}
