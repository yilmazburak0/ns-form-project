import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { ICountry } from '@/types';

export const generateCountriesList = (): ICountry[] => {
  const countryCodes = getCountries();
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

  const countriesWithNames = countryCodes.map(code => {
    try {
      return {
        code: code.toLowerCase(),
        dial_code: `+${getCountryCallingCode(code)}`,
        sortName: regionNames.of(code) || code
      };
    } catch {
      return {
        code: code.toLowerCase(),
        dial_code: '+0',
        sortName: code
      };
    }
  });

  const sortedCountries = countriesWithNames.sort((a, b) => a.sortName.localeCompare(b.sortName));

  return sortedCountries.map(({ code, dial_code }) => ({ code, dial_code }));
};

export const sortCountriesBySelection = (
  countries: ICountry[], 
  selectedCountry?: ICountry
): ICountry[] => {
  if (!selectedCountry) return countries;
  
  const otherCountries = countries.filter(country => country.code !== selectedCountry.code);
  return [selectedCountry, ...otherCountries];
};