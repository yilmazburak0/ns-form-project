'use client';
import React, { useState } from 'react';
import { CountryCodeDropdown } from '@/components/countryCodeDropdown';
import { PhoneNumberInput } from '@/components/phoneNumberInput';
import { ICountry } from '@/types';
import { PageContainer, ContentWrapper } from './_style';

export const JobApplication = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>({
    code: 'tr', 
    name: 'Türkiye', 
    dial_code: '+90'
  });
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCountrySelect = (country: ICountry) => {
    setSelectedCountry(country);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <CountryCodeDropdown
          onSelect={handleCountrySelect}
          selectedCountry={selectedCountry}
        />
        <PhoneNumberInput
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </ContentWrapper>
    </PageContainer>
  );
};