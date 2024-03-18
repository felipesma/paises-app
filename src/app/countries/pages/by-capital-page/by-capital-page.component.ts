import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesServices) {}

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe( (countries) =>  {
      this.countries = countries;
    });
  }
}
