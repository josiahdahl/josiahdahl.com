import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/ui/Section';
import { Link } from 'gatsby';
import styled from "styled-components";

const FourOhFourContent = styled(Section)`
  text-align: center;
  margin-top: 2rem;
`;

const FourOhFour = () => {
  return (
    <Layout>
      <FourOhFourContent>
        <h1>Page not found :-(</h1>
        <Link to="/">Head back home</Link>
      </FourOhFourContent>
    </Layout>
  );
};

export default FourOhFour;
