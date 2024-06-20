import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- Component that displays a housing location -->
      <!-- The housing location data is passed in as a property -->
      <!-- of the housingLocation property -->
      <!-- housingLocation: This is the housing location data that will be
      displayed in the housing-location component -->
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
    `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common'

  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
