'use client';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { ClientThemeProviderProps } from '@/types';
import { theme } from './index';

export const ClientThemeProvider: React.FC<ClientThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};