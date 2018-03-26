import * as React from 'react';
import { ThemeProvider as ExternalThemeProvider } from 'styled-components';

interface Theme {
    primary: string;
}

interface ThemeProviderProps {
    theme: Theme;
    children: JSX.Element;
}

const defaultTheme: Theme = {
    primary: '#f00'
};

const mergedThemes = (customTheme: Theme) => Object.assign({}, defaultTheme, customTheme);

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
    <ExternalThemeProvider theme={mergedThemes(theme)}>{children}</ExternalThemeProvider>
);

export default ThemeProvider;
