import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient } from '@angular/common/http';
import { APIS } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject = new Subject<Cv>();
  selectCvObservable$ = this.selectCvSubject.asObservable();
  constructor(private http: HttpClient) {
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

  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APIS.cv);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((actualCv) => actualCv.id == id) ?? null;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APIS.cv + id);
  }
  deleteCvById(id: number): Observable<Cv> {
    return this.http.delete<Cv>(APIS.cv + id);
  }
  // Brodcaster l'info de selection du cv à tous les observateurs
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
