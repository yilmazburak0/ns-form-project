import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { ICountry } from '@/types';


export const getFlagUrl = (countryCode: string): string => {
  return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
};



export const generateCountriesList = (): ICountry[] => {
  const countries = getCountries();
  const countryNames = new Intl.DisplayNames(['en'], { type: 'region' });

  
  return countries.map(code => {
    try {
      const dialCode = `+${getCountryCallingCode(code)}`;
      const name = countryNames.of(code) || code;
      
      return {
        code: code.toLowerCase(),
        name,
        dial_code: dialCode
      };
    } catch {
      return {
        code: code.toLowerCase(),
        name: code,
        dial_code: '+0'
      };
    }
  }).sort((a, b) => a.name.localeCompare(b.name));
};


export const sortCountriesBySelection = (
  countries: ICountry[], 
  selectedCountry?: ICountry
): ICountry[] => {
  if (!selectedCountry) return countries;
  
  const otherCountries = countries.filter(country => country.code !== selectedCountry.code);
  return [selectedCountry, ...otherCountries];
};