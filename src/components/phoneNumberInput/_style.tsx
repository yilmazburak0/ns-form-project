import styled from '@emotion/styled';
import { ThemedProps } from '@/types';

export const PhoneInputContainer = styled.div`
  width: 100%;
  max-width: 250px;
`;

export const PhoneInput = styled.input<ThemedProps>`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.colors.neutralGray50};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
  font-size: 14px;
  transition: all 0.2s ease;
  height: 36px;
  box-sizing: border-box;
  
  &:hover {
    border-color: ${props => props.theme.colors.gray400};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.blue500};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.blue100};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.gray100};
    color: ${props => props.theme.colors.gray400};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.neutralGray400};
    font-size: 14px;
  }
`;