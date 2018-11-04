import styled from 'styled-components';

const Section = styled.section`
  margin-top: 1rem;
  margin-bottom: 2rem;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
`;

export default Section;
