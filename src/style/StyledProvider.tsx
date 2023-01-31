import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './index';

export const StyledProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
