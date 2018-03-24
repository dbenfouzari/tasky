import * as React from 'react';
import { FormEvent } from 'react';
import styled from 'styled-components';

export interface ParentProps {
    /**
     * Input value that may be string or number
     * @since 0.0.0
     */
    value: string | number;
    /**
     * Handler that will be called when input is updated
     * @since 0.0.0
     */
    onChange: (value: string) => void;
    /**
     * Input styles will be extended with this className
     * @since 0.0.0
     */
    className?: string;
}

export interface InnerProps {
    value: string | number;
    onChange: (event: string) => void;
    parentClassName?: string;
}

const Input = ({ value, onChange, parentClassName, className }: ParentProps & InnerProps) => (
    <input
        value={value}
        onChange={(event: FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value)}
        className={[parentClassName, className].join(' ')}
    />
);

const StyledInput = styled<InnerProps>(Input)`
    padding: 5px 10px;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, .1);
    
    &:focus {
        outline: 0;
    }
`;

const FullInput = ({ value, onChange, className }: ParentProps) => (
    <StyledInput
        value={value}
        onChange={onChange}
        parentClassName={className}
    />
);

export default FullInput;
