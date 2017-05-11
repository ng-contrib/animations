import { trigger, transition, useAnimation, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { LibService, fadeIn, fadeOut } from 'quickstart-lib';

@Component({
  animations: [
    trigger('fade', [
      transition(':enter', useAnimation(fadeIn)),
      transition(':leave', useAnimation(fadeOut))
    ])
  ],
  selector: 'demo-app',
  template: `
    <my-lib></my-lib>
    <h3 [@fade]="">Meaning is: {{meaning}}</h3>
  `,
})
export class AppComponent {
  meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
