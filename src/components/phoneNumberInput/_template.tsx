import React from 'react';
import { IPhoneNumberInput } from './_type';
import { PhoneInputContainer, PhoneInput } from './_style';

export const PhoneNumberInput: React.FC<IPhoneNumberInput> = ({
  value = '',
  onChange,
  placeholder = '555 555 55 55',
  disabled = false
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    const digitsOnlyPhoneNumber  = phoneNumber.replace(/[^\d\s]/g, "");

    if (onChange) {
      onChange(digitsOnlyPhoneNumber);
    }
  };

  return (
    <PhoneInputContainer>
      <PhoneInput
        type="tel"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={11}
      />
    </PhoneInputContainer>
  );
};