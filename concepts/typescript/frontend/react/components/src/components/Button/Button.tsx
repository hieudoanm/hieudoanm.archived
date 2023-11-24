import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 8px 16px;
  color: black;
  background-color: pink;
  border: 0;
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: hotpink;
  }
`;

export type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children = <></>,
  onClick = () => {},
}) => {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>;
};

Button.displayName = 'Button';
Button.defaultProps = { children: <></>, onClick: () => {} };

export default Button;
