'use client';
import React, { useState } from 'react';
import { CountryCodeDropdown } from '@/components/countryCodeDropdown';
import { PhoneNumberInput } from '@/components/phoneNumberInput';
import { ICountry } from '@/types';
import { generateCountriesList } from '@/utils';

export const JobApplication = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>({
    code: 'tr', 
    name: 'Türkiye', 
    dial_code: '+90'
  });
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCountrySelect = (country: ICountry) => {
    setSelectedCountry(country);
    console.log('Selected country:', country);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    console.log('Phone number:', value);
    console.log('Full phone number:', `${selectedCountry?.dial_code} ${value}`);
  };

  return (
      <>
        <CountryCodeDropdown
        countries={generateCountriesList()}
        onSelect={handleCountrySelect}
        selectedCountry={selectedCountry}
      />
      <PhoneNumberInput
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      </>
  );
};