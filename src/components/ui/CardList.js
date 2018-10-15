import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CardPropTypes } from '../Card';
import Card from '../Card';

const CardContainer = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const WrappedCard = ({ card, ...rest }) => (
  <CardContainer {...rest}>
    <Card {...card} />
  </CardContainer>
);

export const CardList = ({ cards }) => {
  return (
    <React.Fragment>
      {cards.map((card, i) => (
        <WrappedCard key={i} card={card} />
      ))}
    </React.Fragment>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(CardPropTypes).isRequired,
};
