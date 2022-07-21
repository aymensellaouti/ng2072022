import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees: Cv[] = [];
  constructor() {}
  getEmbauchees(): Cv[] {
    return this.embauchees;
  }
  embaucher(cv: Cv): boolean {
    /*
      Si cv existe
        return false;
      sinon
        embauche
        retourne true
    */
    const index = this.embauchees.indexOf(cv);
    if (index == -1) {
      this.embauchees.push(cv);
      console.log(this.embauchees);

      return true;
    }
    return false;
  }
}
