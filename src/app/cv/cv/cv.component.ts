import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/service/todo.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  nb = 0;
  /*   selectedCv: Cv | null = null; */
  constructor(
    private logger: LoggerService,
    private sayHello: SayHelloService,
    private todoService: TodoService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.sayHello.hello();
    this.cvService.selectCvObservable$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
    this.logger.log('cc je suis le cv component');
    this.cvs = this.cvService.getCvs();
  }
  getSelectedItem(cv: Cv) {
    /*     this.selectedCv = cv; */
    this.todoService.logTodos();
  }
}
