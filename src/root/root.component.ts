import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>hello world!</h1>
    <button rel="hi-button">Hi</button>
    <card></card>
  `,
    styles: [`
      * {
        font-family: AmericanSansLight, Arial, serif;
      }
      head, body, .app-content {
        height: 100vh;
        width: 100vw;
      }
    `]
})

export class RootComponent {
}
