import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Section from '../components/ui/Section';
import PageContent, { HTMLPageContent } from '../components/PageContent';

const PortfolioTitle = styled.h1`
  margin-top: 0.5rem;
`;

const PortfolioList = styled.ul`
  list-style: none;
  font-size: 1.1rem;
  padding-left: 0.5rem;

  li {
    margin-bottom: 0.8rem;
  }
`;

const PortfolioItemPageTemplate = ({
  frontmatter,
  content,
  contentComponent,
}) => {
  const Content = contentComponent || PageContent;
  const { title, demo, repository } = frontmatter;
  return (
    <main>
      <Section>
        <PortfolioTitle>{title}</PortfolioTitle>
        <Section>
          <PortfolioList>
            <li>
              <a href={repository} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </li>
          </PortfolioList>
        </Section>
        <Content content={content} />
      </Section>
    </main>
  );
};

PortfolioItemPageTemplate.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PortfolioItemPage = ({ data }) => {
  const { markdownRemark: item } = data;
  const { title } = item.frontmatter;

  return (
    <Layout helmetProps={{ title: `${title}` }}>
      <PortfolioItemPageTemplate
        frontmatter={item.frontmatter}
        content={item.html}
        contentComponent={HTMLPageContent}
      />
    </Layout>
  );
};

PortfolioItemPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PortfolioItemPageTemplate.propTypes.frontmatter,
      html: PropTypes.string.isRequired,
    }),
  }),
};

export default PortfolioItemPage;

export const portfolioItemQuery = graphql`
  query PortfolioItemPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        repository
        demo
      }
    }
  }
`;
