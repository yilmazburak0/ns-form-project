import { ICountry } from '@/types';

export interface ICountryCodeDropdown {
  countries: ICountry[];
  selectedCountry?: ICountry;
  onSelect: (country: ICountry) => void;
  placeholder?: string;
} 