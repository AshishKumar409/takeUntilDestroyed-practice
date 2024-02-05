import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ShowCaseComponent } from './show-case/show-case.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="display=!display">toggleDisplay</button>

    @if(display){
      <app-show-case/>
    }
    
 
  `,
  imports: [ShowCaseComponent],
})
export class App {
  name = 'Angular';
  display = false;
}

bootstrapApplication(App);
