'use client';
import React, { useState } from 'react';
import { CountryCodeDropdown } from '@/components/countryCodeDropdown';
import { ICountry } from '@/types';
import { generateCountriesList } from '@/utils';

export const JobApplication = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>({code: 'tr', name: 'Türkiye', dial_code: '+90'});

  const handleCountrySelect = (country: ICountry) => {
    setSelectedCountry(country);
    console.log('Selected country:', country);
  };

  return (
        <CountryCodeDropdown
        countries={generateCountriesList()}
          onSelect={handleCountrySelect}
          selectedCountry={selectedCountry}
        />
  );
};