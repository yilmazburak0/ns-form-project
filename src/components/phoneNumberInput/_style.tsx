import styled from '@emotion/styled';

export const PhoneInputContainer = styled.div`
  width: 100%;
  max-width: 200px;
`;

export const PhoneInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  transition: all 0.2s ease;
  min-height: 48px;
  box-sizing: border-box;
  
  &:hover {
    border-color: #9ca3af;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }
`;