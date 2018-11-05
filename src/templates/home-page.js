import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/ui/Section';
import PageContent, { HTMLPageContent } from '../components/PageContent';
import { CardList } from '../components/ui/CardList';

export const HomePageTemplate = ({
  content,
  contentComponent,
  featuredProjects,
}) => {
  const Content = contentComponent;

  return (
    <main>
      <Section>
        <Content content={content} />
      </Section>
      {featuredProjects ? (
        <Section>
          <h2>
            FEATURED PROJECT
            {featuredProjects.length > 1 ? 'S' : ''}
          </h2>
          <CardList
            cards={featuredProjects.map(project => ({
              to: project.fields.slug,
              actionText: 'View Project',
              summary: project.frontmatter.summary,
              title: project.frontmatter.title,
              tags: project.frontmatter.tags,
            }))}
          />
        </Section>
      ) : (
        ''
      )}
    </main>
  );
};

const FeaturedProjects = PropTypes.shape({
  id: PropTypes.string,
  fields: PropTypes.shape({
    slug: PropTypes.string,
  }),
  frontmatter: PropTypes.shape({
    summary: PropTypes.string,
    title: PropTypes.string,
  }),
});

HomePageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  featuredProjects: PropTypes.arrayOf(FeaturedProjects),
};

HomePageTemplate.defaultProps = {
  contentComponent: PageContent,
  featuredProjects: [],
};

const HomePage = ({ data }) => {
  const { markdownRemark: page, allMarkdownRemark } = data;

  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLPageContent}
        content={page.html}
        featuredProjects={allMarkdownRemark.edges.map(e => e.node)}
      />
    </Layout>
  );
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        metaDescription
      }
    }
    allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
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
