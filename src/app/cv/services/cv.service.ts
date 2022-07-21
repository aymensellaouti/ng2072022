import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject = new Subject<Cv>();
  selectCvObservable$ = this.selectCvSubject.asObservable();
  constructor() {
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

  getCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv | null {
    return this.cvs.find((actualCv) => actualCv.id == id) ?? null;
  }
  // Brodcaster l'info de selection du cv à tous les observateurs
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
