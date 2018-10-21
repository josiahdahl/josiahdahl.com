import styled from "styled-components";
import { sizes } from "../styles/breakpoints";

const Content = styled.div`
  padding: 1rem 1.5rem;
  max-width: 45rem;
  margin: 0 auto;
  @media (min-width: ${sizes.md.min}) {
    margin: 0;
    padding: 2rem 4rem;
  }
`;

export default Content;