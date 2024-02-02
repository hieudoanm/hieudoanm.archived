import React from 'react';
import styled from 'styled-components';

export const StyledLinearText = styled.div`
  display: inline;
  position: relative;
  color: #ffb715;

  span.opacity-0 {
    height: 30%;
    position: absolute;
    color: #fff;
    overflow: hidden;
  }

  span.opacity-100 {
    height: 50%;
    position: absolute;
    color: #fff;
    overflow: hidden;
  }
`;

export const LinearText: React.FC<{ children?: string }> = ({
  children = '',
}) => {
  return (
    <StyledLinearText className="truncate text-xl md:text-3xl">
      <span className="opacity-0 md:opacity-100">{children}</span>
      <span className="opacity-100 md:opacity-0">{children}</span>
      {children}
    </StyledLinearText>
  );
};

LinearText.displayName = 'LinearText';
LinearText.defaultProps = { children: '' };

export default LinearText;
