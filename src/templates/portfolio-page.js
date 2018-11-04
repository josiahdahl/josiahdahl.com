import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/ui/Section';
import PageContent, { HTMLPageContent } from '../components/PageContent';
import Layout from '../components/Layout';
import { CardList } from '../components/ui/CardList';

export const PortfolioPageTemplate = ({
  content,
  contentComponent,
  portfolioItems,
  title,
}) => {
  const Content = contentComponent || PageContent;
  return (
    <main>
      <Section>
        <h1>{title}</h1>
        <Content content={content} />
      </Section>
      <Section>
        <CardList
          isTiled={true}
          cards={portfolioItems.map(project => ({
            to: project.fields.slug,
            actionText: 'View Project',
            summary: project.frontmatter.summary,
            title: project.frontmatter.title,
          }))}
        />
      </Section>
    </main>
  );
};

PortfolioPageTemplate.propTypes = {};

const PortfolioPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const { html: content, frontmatter } = data.markdownRemark;
  const portfolioItems = edges.map(({ node }) => node);
  return (
    <Layout helmetProps={{ title: frontmatter.title }}>
      <PortfolioPageTemplate
        contentComponent={HTMLPageContent}
        content={content}
        portfolioItems={portfolioItems}
        title={frontmatter.title}
      />
    </Layout>
  );
};

export default PortfolioPage;

export const portfolioPageQuery = graphql`
  query PortfolioPageQuery {
    markdownRemark(fields: { slug: { eq: "/portfolio/" } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio/.*md$/" } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            summary
            title
          }
        }
      }
    }
  }
`;
