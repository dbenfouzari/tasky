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
    }

    export function Input(props: InputProps): JSX.Element;
    export function Button(props: ButtonProps): JSX.Element;
}
