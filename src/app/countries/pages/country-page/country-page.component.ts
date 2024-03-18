import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesServices } from '../../services/countries.service';
import { Subscription, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit, OnDestroy {
  activatedRouteSubscription!: Subscription;
  country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServices: CountriesServices,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesServices.searcCountryByAlphaCode(id))
      )
      .subscribe((country) => {
        if(!country) {
          return this.router.navigateByUrl('')
        }
        return this.country = country;
      });
  }

  // searchCountry(code: string) {
  //   this.countrySubscription = this.countriesServices
  //     .searcCountryByAlphaCode(code)
  //     .subscribe((country) => {
  //       console.log(country);
  //     });
  // }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
  }
}
