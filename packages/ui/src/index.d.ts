declare module '@tasky/ui' {
    export interface InputProps {
        value: string | number;
        onChange: (value: string) => void;
        className?: string;
    }

    export interface ButtonProps {
        onClick: (event: HTMLButtonElement) => void;
        children: JSX.Element | JSX.Element[] | string;
        className?: string;
        size?: string;
    }

    export interface ThemeProviderProps {
        theme: Object;
        children: JSX.Element;
    }

    interface Color {
        light:  string;
        medium: string;
        strong: string;
    }

    interface Colors {
        GRAPE_FRUIT: Color;
        BITTER_SWEET: Color;
        SUNFLOWER: Color;
        GRASS: Color;
        MINT: Color;
        AQUA: Color;
        LIGHT_GREY: Color;
        DARK_GREY: Color;
    }

    export function Input(props: InputProps): JSX.Element;
    export function Button(props: ButtonProps): JSX.Element;
    export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
    export const COLORS: Colors;
}
