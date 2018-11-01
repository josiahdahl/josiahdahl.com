import styled, { css } from 'styled-components';

const baseStyles = css`
  padding: 0.4rem;
  font-size: 1.1rem;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.text};
  color: ${props => props.theme.light};
  background-color: transparent;
  width: 100%;
`;

const focusStyles = css`
  &:focus {
    outline: 1px solid ${props => props.theme.light};
  }
`;

export const Input = styled.input`
  ${baseStyles};
  ${focusStyles};
  margin-bottom: 0.8rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

export const Textarea = styled.textarea`
  ${baseStyles};
  ${focusStyles};
  margin-bottom: 0.8rem;
`;
