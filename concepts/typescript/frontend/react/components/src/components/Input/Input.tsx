import styled from '@emotion/styled';
import React, { ChangeEvent } from 'react';

const StyledInput = styled.input``;

export type InputProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  value = '',
  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    return;
  }
}) => {
  return <StyledInput value={value} onChange={onChange} />;
};

Input.displayName = 'Input';
Input.defaultProps = {
  value: '',
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  }
};

export default Input;
