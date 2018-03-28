import {NavbarProps} from "@tasky/ui";

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

    export interface InternalTheme {
        [colorType: string]: ColorPalette;
    }

    export interface Theme {
        primary: string;
    }

    export interface ThemeProviderProps {
        theme: Theme;
        children: JSX.Element;
    }

    export type Color = string;

    export interface ColorPalette {
        light: Color;
        medium: Color;
        strong: Color;
    }

    /**
     * @see https://www.materialui.co/flatuicolors
     */
    interface Colors {
        // https://www.materialui.co/flatuicolors
        MATERIAL: {
            TURQUOISE: '#1abc9c';
            GREENSEA: '#16a085';
            SUNFLOWER: '#f1c40f';
            ORANGE: '#f39c12';
            EMERLAND: '#2ecc71';
            NEPHRITIS: '#27ae60';
            CARROT: '#e67e22';
            PUMPKIN: '#d35400';
            PETER_RIVER: '#3498db';
            BELIZE_HOLE: '#2980b9';
            ALIZARIN: '#e74c3c';
            POME_GRANATE: '#c0392b';
            AMETHYST: '#9b59b6';
            WYSTHERIA: '#8e44ad';
            CLOUDS: '#ecf0f1';
            SILVER: '#bdc3c7';
            WET_ASPHALT: '#34495e';
            MIDNIGHT_BLUE: '#2c3e50';
            CONCRETE: '#95a5a6';
            ASBESTOS: '#7f8c8d';
        }
    }

    export interface NavbarProps {
        /**
         * The title of the page the navbar should display
         * @since 0.0.0
         */
        title: string;
        /**
         * Class name to augment Navbar theme
         * @since 0.0.0
         */
        className?: string;
        /**
         * The navbar elements to be shown
         * @since 0.0.0
         */
        children?: JSX.Element | JSX.Element[];
        /**
         * Controls if Navbar should be fixed at top of the screen
         * @default true
         * @since 0.0.0
         */
        fixed?: boolean;
    }

    export interface LayoutProps {
        /**
         * Layout content
         */
        children: JSX.Element | JSX.Element[];
        /**
         * Layout styles will be extended with this className
         * @since 0.0.0
         */
        className?: string;
    }

    export function Input(props: InputProps): JSX.Element;
    export function Button(props: ButtonProps): JSX.Element;
    export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
    export function Navbar(props: NavbarProps): JSX.Element;
    export function DefaultLayout(props: LayoutProps): JSX.Element;
    export const COLORS: Colors;
}
