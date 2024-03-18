import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesServices) {}

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe( (countries) =>  {
      this.countries = countries;
    });
  }
}
