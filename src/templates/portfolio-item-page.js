import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout';
import Section from '../components/ui/Section';
import PageContent, { HTMLPageContent } from '../components/PageContent';

const PortfolioTitle = styled.h1`
  margin-top: 0.5rem;
`;

const PortfolioLink = styled.a`
  color: ${props => props.theme.light};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PortfolioList = styled.ul`
  list-style: none;
  font-size: 1.1rem;
  padding-left: 0.5rem;

  li {
    margin-bottom: 0.8rem;
  }
`;

const PortfolioTag = ({ className, tag }) => (
  <li className={className}>
    <PortfolioLink href={`/tags/${tag.toLowerCase()}`}>{tag}</PortfolioLink>
  </li>
);

const PortfolioMetaContainer = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    width: 50%;
  }
`;

const PortfolioItemPageTemplate = ({
  frontmatter,
  content,
  contentComponent,
}) => {
  const Content = contentComponent || PageContent;
  const { title, tags, demo, repository } = frontmatter;
  return (
    <main>
      <Section>
        <PortfolioLink href="/portfolio/"><FontAwesomeIcon icon={faAngleLeft}/>Back</PortfolioLink>
        <PortfolioTitle>{title}</PortfolioTitle>
        <Content content={content} />
      </Section>
      <PortfolioMetaContainer>
        <Section>
          <h2>Tags</h2>
          {tags.length > 0 ? (
            <PortfolioList>
              {tags.map((tag, i) => (
                <PortfolioTag tag={tag} key={i} />
              ))}
            </PortfolioList>
          ) : (
            undefined
          )}
        </Section>
        <Section>
          <h2>Links</h2>
          <PortfolioList>
            <li>
              <PortfolioLink href={repository} rel="noopener noopener">
                GitHub
              </PortfolioLink>
            </li>
            <li>
              <PortfolioLink href={demo} rel="noopener noopener">
                Demo
              </PortfolioLink>
            </li>
          </PortfolioList>
        </Section>
      </PortfolioMetaContainer>
    </main>
  );
};

PortfolioItemPageTemplate.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    repository: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PortfolioItemPage = ({ data }) => {
  const { markdownRemark: item } = data;

  return (
    <Layout>
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
        tags
        repository
        demo
      }
    }
  }
`;
