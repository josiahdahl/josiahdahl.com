import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.4rem;
  font-size: 1.1rem;
  border-radius: 2px;
  background-color: ${props => props.theme.accent};
  border: 1px solid ${props => props.theme.accent};
  color: ${props => props.theme.dark};
  font-weight: bold;
  letter-spacing: 1px;
`;