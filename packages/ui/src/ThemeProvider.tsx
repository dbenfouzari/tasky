import * as React from 'react';
import { ThemeProvider as ExternalThemeProvider } from 'styled-components';
import { Color, ColorPalette, Theme, ThemeProviderProps, InternalTheme } from '@tasky/ui';
import { COLORS } from './constants';
import { getTones } from './utils';

const defaultTheme: InternalTheme = {
    primary: getTones(COLORS.MATERIAL.ALIZARIN)
};

const convertColorToPalette = (color: Color): ColorPalette => getTones(color);
const convertThemeToInternalTheme = (theme: Theme): InternalTheme => {
    let nextTheme: InternalTheme = {};

    Object.keys(theme).forEach(colorType => {
        nextTheme[colorType] = convertColorToPalette(theme[colorType]);
    });

    return nextTheme;
};

const mergeThemes = (customTheme: Theme): InternalTheme => ({
    ...defaultTheme,
    ...convertThemeToInternalTheme(customTheme)
});

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
    <ExternalThemeProvider theme={mergeThemes(theme)}>{children}</ExternalThemeProvider>
);

export default ThemeProvider;
