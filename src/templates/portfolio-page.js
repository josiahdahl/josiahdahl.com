import PropTypes from "prop-types";
import React from "react";
import Section from "../components/ui/Section";
import PageContent from "../components/PageContent";
import Card from "../components/Card";

export const PortfolioPageTemplate = ({content, contentComponent, portfolioItems}) => {
  const Content = contentComponent || PageContent;

  return (
    <main>
      <Section>
        <Content content={content}/>
      </Section>
      <Section>
        {portfolioItems.map((item, i) => <Card/>)}
      </Section>
    </main>
  );
};

PortfolioPageTemplate.propTypes = {};