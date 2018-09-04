import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Section from '../components/ui/Section';
import PageContent, { HTMLPageContent } from '../components/PageContent';

export const HomePageTemplate = ({ content, contentComponent }) => {
  const Content = contentComponent || PageContent;
  return (
    <main>
      <Section>
        <Content content={content} />
      </Section>
      <Section>
        <h2>FEATURED PROJECT</h2>
        <Card
          to="#"
          actionText="View Project"
          summary="Track stocks on the Investopedia platform easier with live updates
from the IEX API."
          title="Fake Stock"
          tags={['React', 'Redux', 'Netlify', 'APIs']}
        />
      </Section>
      <Section>
        <h2>LATEST POST</h2>
        <Card
          to="#"
          actionText="Read More"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          title="Great post"
        />
      </Section>
    </main>
  );
};

HomePageTemplate.propTypes = {};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HomePageTemplate contentComponent={HTMLPageContent} content={post.html}/>
    </Layout>
  );
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
