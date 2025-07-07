import React, { useState, useEffect, useRef } from 'react';
import { ICountryCodeDropdown } from './_type';
import { ICountry } from '@/types';
import { sortCountriesBySelection } from '@/utils';

import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  DropdownItemContent,
  FlagIcon,
  CountryName,
  DialCode,
  ArrowIcon,
  PlaceholderText
} from './_style';

export const CountryCodeDropdown: React.FC<ICountryCodeDropdown> = ({
  countries,
  selectedCountry,
  onSelect,
  placeholder = "Select a country"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortedCountriesBySelection = React.useMemo(() => 
    sortCountriesBySelection(countries, selectedCountry),
    [countries, selectedCountry]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelection = (country: ICountry) => {
    onSelect(country);
    setIsOpen(false);
  };

  const handleDropdownButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDropdownToggle();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleCountryItemClick = (country: ICountry) => () => {
    handleCountrySelection(country);
  };

  const handleCountryItemKeyDown = (country: ICountry) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCountrySelection(country);
    }
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        onClick={handleDropdownToggle}
        onKeyDown={handleDropdownButtonKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selectedCountry ? (
          <>
            <FlagIcon className={`fi fi-${selectedCountry.code}`} />

            <CountryName>{selectedCountry.name}</CountryName>
            <ArrowIcon isOpen={isOpen} />
            <DialCode>{selectedCountry.dial_code}</DialCode>
          </>
        ) : (
          <>
            <PlaceholderText>{placeholder}</PlaceholderText>
            <ArrowIcon isOpen={isOpen} />
          </>
        )}
      </DropdownButton>

      {isOpen && (
        <DropdownList role="listbox">
          {sortedCountriesBySelection.map((country) => (
            <DropdownItem key={country.code} role="option">
              <DropdownItemContent
                onClick={handleCountryItemClick(country)}
                onKeyDown={handleCountryItemKeyDown(country)}
                tabIndex={0}
              >
               <FlagIcon className={`fi fi-${country.code}`} />
                <CountryName>{country.name}</CountryName>
                <DialCode>{country.dial_code}</DialCode>
              </DropdownItemContent>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};