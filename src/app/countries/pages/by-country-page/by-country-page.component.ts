import { Component, OnInit } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public searchInitialValue: string = '';

  constructor(private countriesService: CountriesServices) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this. searchInitialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe( (countries) =>  {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}