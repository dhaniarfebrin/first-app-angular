import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import type { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg'

  housingLocationList: Housinglocation[] = []
  housingServices: HousingService = inject(HousingService)
  filteredLocationList: Housinglocation[] = []

  constructor() {
    this.housingServices.getAllHousingLocations().then((data: Housinglocation[]) => {
      this.housingLocationList = data;
      this.filteredLocationList = this.housingLocationList
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocationList) => housingLocationList?.city.toLowerCase().includes(text.toLowerCase()))
  }
  
}
