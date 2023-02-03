import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './index';
import { GlobalStyle } from './GlobalStyle';

export const StyledProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
