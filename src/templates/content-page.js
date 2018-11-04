import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import { HTMLPageContent } from '../components/PageContent';
import { graphql } from 'gatsby';
import { HomePageTemplate } from './home-page';
import PageContent from '../components/PageContent';
import Section from '../components/ui/Section';

export const ContentPageTemplate = ({ contentComponent, content }) => {
  const Content = contentComponent;
  return (
    <main>
      <Section>
        <Content content={content} />
      </Section>
    </main>
  );
};

ContentPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

HomePageTemplate.defaultProps = {
  contentComponent: PageContent,
};

const ContentPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const { title } = page.frontmatter;

  return (
    <Layout helmetProps={{ title }}>
      <ContentPageTemplate
        contentComponent={HTMLPageContent}
        content={page.html}
      />
    </Layout>
  );
};

export default ContentPage;

export const contentPageQuery = graphql`
  query ContentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
