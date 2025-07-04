import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-react-mfe-route',
  template: `<react-mfe></react-mfe>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReactMfeRoute {}
