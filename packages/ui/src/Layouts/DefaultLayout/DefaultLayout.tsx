import * as React from 'react';
import styled from 'styled-components';

export interface ParentProps {
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

export interface InnerProps {
    parentClassName?: string;
}

const Layout = ({ parentClassName, className, children }: ParentProps & InnerProps) => (
    <div
        className={[parentClassName, className].join(' ')}
    >
        {children}
    </div>
);

const StyledLayout = styled<InnerProps>(Layout)`
    padding: 60px 0;
    width: 100vw;
    height: 100vh;
    background: #eee;

    & > .navbar {
        margin-bottom: 20px;
    }
`;

const FullLayout = ({ children, className }: ParentProps) => (
    <StyledLayout
        children={children}
        parentClassName={className}
    />
);

export default FullLayout;
