import * as React from 'react';
import { ThemeProvider as ExternalThemeProvider } from 'styled-components';
import { COLORS } from './constants';

interface Color {
    light:  string;
    medium: string;
    strong: string;
}

interface Theme {
    primary: Color;
}

interface ThemeProviderProps {
    theme: Theme;
    children: JSX.Element;
}

const defaultTheme: Theme = {
    primary: COLORS.AQUA
};

const mergedThemes = (customTheme: Theme): Theme => Object.assign({}, defaultTheme, customTheme);

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
    <ExternalThemeProvider theme={mergedThemes(theme)}>{children}</ExternalThemeProvider>
);

export default ThemeProvider;
