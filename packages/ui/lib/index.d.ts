import { FormEvent } from 'react';

declare module 'tasky-ui' {
    export interface InputProps {
        value: string | number;
        onChange: (value: string) => void;
        className?: string;
    }

    export function Input(props: InputProps): JSX.Element;
}
