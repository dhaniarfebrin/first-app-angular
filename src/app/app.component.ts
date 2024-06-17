import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
      <main>
        <header>
            <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="32" height="32">
        </header>
        <section class="content">
          <app-home></app-home>
        </section>
      </main>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hilhi';
}
