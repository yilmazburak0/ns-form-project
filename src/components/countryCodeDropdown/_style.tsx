import styled from '@emotion/styled';
import { FiChevronDown } from 'react-icons/fi';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 140px;
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.colors.neutralGray50};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
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
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 4px 0 0 0;
  padding: 0;
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.neutralGray50};
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 200px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const DropdownItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.gray100};
  }

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 8px 8px;
  }
`;

export const FlagIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
  border-radius: 50px;
`;

export const DialCode = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.neutralGray400};
  font-weight: 500;
`;

export const PlaceholderText = styled.span`
  color: ${props => props.theme.colors.neutralGray400};
  font-size: 14px;
  flex: 1;
`;

export const FlagAndDialCode = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ChevronIcon = styled(FiChevronDown, {
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})<{ isOpen: boolean }>`
  margin-left: auto;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  color: ${props => props.theme.colors.stormBlue300};
`;