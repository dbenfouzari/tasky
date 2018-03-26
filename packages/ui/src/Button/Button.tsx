import * as React from 'react';
import { FormEvent } from 'react';
import styled from 'styled-components';

export interface ParentProps {
    /**
     * Handler that will be called when input is updated
     * @since 0.0.0
     */
    onClick: (event: FormEvent<HTMLButtonElement>) => void;
    /**
     * Input styles will be extended with this className
     * @since 0.0.0
     */
    className?: string;
    children: string;
}

export interface InnerProps {
    onClick: (event: FormEvent<HTMLButtonElement>) => void;
    parentClassName?: string;
}

const Button = ({ onClick, parentClassName, className, children }: ParentProps & InnerProps) => (
    <button
        onClick={onClick}
        className={[parentClassName, className].join(' ')}
    >
        {children}
    </button>
);

const StyledButton = styled<InnerProps>(Button)`
    padding: 5px 10px;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, .1);
    
    &:focus {
        outline: 0;
    }
`;

const FullButton = ({ onClick, className, children }: ParentProps) => (
    <StyledButton
        onClick={onClick}
        parentClassName={className}
    >
        {children}
    </StyledButton>
);

export default FullButton;
