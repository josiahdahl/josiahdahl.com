import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { sizes } from "../styles/breakpoints";

const CardContainer = styled.article`
  border: 1px solid ${props => props.theme.light};
  border-radius: 5px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.md.min}) {
    padding: 2rem;
  }
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
        <CardAction to={to}>{actionText}</CardAction>
      </CardFooter>
    </CardContainer>
  );
};

export const CardPropTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  to: PropTypes.string,
  actionText: PropTypes.string
};

Card.propTypes = CardPropTypes;

Card.defaultProps = {
  tags: [],
  to: undefined,
  actionText: "View"
};


export default Card;
