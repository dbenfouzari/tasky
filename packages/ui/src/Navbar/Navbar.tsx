import * as React from 'react';
import styled from 'styled-components';
import { NavbarProps, InternalTheme } from '@tasky/ui';
import { getTextColor } from '../utils';

interface StyledProps extends NavbarProps {
    theme: InternalTheme;
    parentClassName?: string;
}

export interface InnerProps extends StyledProps {
    className?: string;
}

const Navbar = ({ parentClassName, className, title }: InnerProps) => (
    <div
        className={[parentClassName, className].join(' ')}
    >
        {title}
    </div>
);

const StyledNavbar = styled<StyledProps>(Navbar)`
  position: ${(props: StyledProps) => props.fixed ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  width: ${(props: StyledProps) => props.fixed ? '100vw' : 'auto'};
  padding: 20px;
  background-color: ${(props: StyledProps) => props.theme.primary.light};
  color: ${(props: StyledProps) => getTextColor(props.theme.primary.light)};
`;

const FullNavbar = ({ children, className, fixed = true, title }: NavbarProps): JSX.Element => (
    <StyledNavbar
        parentClassName={className}
        children={children}
        fixed={fixed}
        title={title}
    />
);

export default FullNavbar;
