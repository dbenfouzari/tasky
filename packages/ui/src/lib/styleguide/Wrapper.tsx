import * as React from 'react';
import ThemeProvider from '../../ThemeProvider';
import { COLORS } from '../../constants';

interface WrapperProps {
    children: JSX.Element;
}

const Wrapper = ({ children }: WrapperProps) => (
    <ThemeProvider theme={{ primary: COLORS.MINT }}>{children}</ThemeProvider>
);

export default Wrapper;
