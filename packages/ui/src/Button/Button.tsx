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
    /**
     * Defines the size
     * @since 0.0.0
     * @default normal
     */
    size?: string;
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

const getFontSizeFromProperty = (props: ParentProps) => {
    switch (props.size) {
        case 'large':
            return '1.75em';

        case 'medium':
            return '1.25em';

        case 'small':
            return '0.75em';

        default:
            return '1em';
    }
};

const StyledButton = styled<ParentProps & InnerProps>(Button)`
    padding: 5px 10px;
    font-size: ${getFontSizeFromProperty};
    border: 1px solid rgba(0, 0, 0, .1);
    background-color: ${props => props.theme.primary.light};
    color: #fff;

    &:focus,
    &:hover {
        outline: 0;
        background-color: ${props => props.theme.primary.medium};
    }
 
    &:active {
      background-color: ${props => props.theme.primary.strong};
    }
`;

const FullButton = ({ onClick, className, children, size = 'normal' }: ParentProps) => (
    <StyledButton
        onClick={onClick}
        parentClassName={className}
        size={size}
    >
        {children}
    </StyledButton>
);

export default FullButton;
