import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
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
  background-color: white;
  border: 1px solid #d1d5db;
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
    background-color: #f3f4f6;
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
  margin-right: 8px;
`;


export const CountryName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  flex: 1;
`;

export const DialCode = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
  margin-left: auto;
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #6b7280;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  margin-left: 8px;
`;

export const PlaceholderText = styled.span`
  color: #9ca3af;
  font-size: 14px;
  flex: 1;
`;