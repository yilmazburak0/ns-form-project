import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ICountryCodeDropdown } from './_type';
import { ICountry } from '@/types';
import { sortCountriesBySelection, generateCountriesList } from '@/utils';

import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  DropdownItemContent,
  FlagIcon,
  DialCode,
  PlaceholderText,
  FlagAndDialCode,
  ChevronIcon
} from './_style';

export const CountryCodeDropdown: React.FC<ICountryCodeDropdown> = ({
  selectedCountry,
  onSelect,
  placeholder = 'Select a country'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = useMemo(() => generateCountriesList(), []);

  const sortedCountriesBySelection = useMemo(
    () => sortCountriesBySelection(countries, selectedCountry),
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
            <FlagAndDialCode>
              <FlagIcon className={`fi fi-${selectedCountry.code}`} />
              <DialCode>{selectedCountry.dial_code}</DialCode>
            </FlagAndDialCode>
            <ChevronIcon size={20} isOpen={isOpen} />
          </>
        ) : (
          <>
            <PlaceholderText>{placeholder}</PlaceholderText>
            <ChevronIcon size={20} isOpen={isOpen} />
          </>
        )}
      </DropdownButton>

      {isOpen && (
        <DropdownList role="listbox">
          {sortedCountriesBySelection.map(country => (
            <DropdownItem key={country.code} role="option">
              <DropdownItemContent
                onClick={handleCountryItemClick(country)}
                onKeyDown={handleCountryItemKeyDown(country)}
                tabIndex={0}
              >
                <FlagAndDialCode>
                  <FlagIcon className={`fi fi-${country.code}`} />
                  <DialCode>{country.dial_code}</DialCode>
                </FlagAndDialCode>
              </DropdownItemContent>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};