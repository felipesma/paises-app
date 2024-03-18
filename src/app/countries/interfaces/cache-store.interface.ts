import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
    byCapital: TermCounties;
    byCountries: TermCounties;
    byRegion: RegionCountries;
}

export interface TermCounties {
    term: string;
    countries: Country[];
}

export interface RegionCountries {
    region?: Region;
    countries: Country[];
}