// shared-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private spokenWordSubject = new BehaviorSubject<string>(''); // Initialize with an empty string
  spokenWord$ = this.spokenWordSubject.asObservable();

  setSpokenWord(spokenWord: string) {
    this.spokenWordSubject.next(spokenWord);
  }
}
