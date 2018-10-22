import styled from 'styled-components';

const Section = styled.section.attrs({
  maxWidth: props => props.maxWidth || '100%',
})`
  margin-top: 1rem;
  margin-bottom: 2rem;
  max-width: ${props => props.maxWidth};
`;

export default Section;
