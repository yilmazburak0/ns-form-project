import { ICountry } from '@/types';

export interface ICountryCodeDropdown {
  selectedCountry?: ICountry;
  onSelect: (country: ICountry) => void;
  placeholder?: string;
}