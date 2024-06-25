import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import type { Housinglocation } from '../housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
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
