import styled from 'styled-components';
import { sizes } from '../styles/breakpoints';

const Content = styled.div`
  padding: 1rem 1.5rem;
  max-width: 45rem;
  margin: 0 auto;
  @media (min-width: ${sizes.md.min}) {
    margin: 0;
    padding: 2rem 4rem;
  }

  @media (min-width: ${sizes.lg.min}) {
    margin: 0 auto;
    /* Navbar width calculated to rem */
    padding-right: ${224 / 16}rem;
  }

  @media (min-width: ${sizes.xl.min}) {
    /* Navbar width calculated to rem */
    padding-right: ${352 / 16}rem;
  }

  img {
    max-width: 100%;
  }
`;

export default Content;
