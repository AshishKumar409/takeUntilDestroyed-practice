import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  getValues() {
    return interval(1000);
  }
}
