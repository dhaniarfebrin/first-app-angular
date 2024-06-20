import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  /**
   * Represents a housing location that can be displayed.
   *
   * @property {Housinglocation} housingLocation - The housing location to display.
   *                                               This property is optional and
   *                                               will default to an empty object.
   */
  @Input() housingLocation!: Housinglocation;
}
