import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}
  log(message: any) {
    console.log('in logger  :');
    console.log(message);
  }
}
