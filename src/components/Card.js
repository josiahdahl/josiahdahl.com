import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CardContainer = styled.article`
  border: 1px solid ${props => props.theme.light};
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.accent};
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const CardSummary = styled.p`
  margin: 0 0 2rem 0;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const CardTagLabel = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
`;

const CardTag = styled.a`
  color: ${props => props.theme.light};
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
  text-decoration: underline;
  }
`;

const CardAction = styled(Link)`
  color: ${props => props.theme.accent};
  font-size: 1.2rem;
  justify-self: flex-end;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.04em;
`;

const Card = ({ title, summary, tags, to, actionText }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardSummary>{summary}</CardSummary>
      <CardFooter>
        <div>
          {tags.length > 0 ? (
            <React.Fragment>
              <CardTagLabel>Tags</CardTagLabel>
              {tags.map(tag => (
                <CardTag href={`/tags/${tag.toLowerCase()}`} key={tag}>{tag}</CardTag>
              ))}
            </React.Fragment>
          ) : (
            undefined
          )}
        </div>

        <CardAction to={to}>{actionText}</CardAction>
      </CardFooter>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  to: PropTypes.string,
  actionText: PropTypes.string
};

Card.defaultProps = {
  tags: [],
  to: undefined,
  actionText: "View"
};

export default Card;
