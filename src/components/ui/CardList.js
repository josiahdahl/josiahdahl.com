import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CardPropTypes } from '../Card';
import Card from '../Card';

const CardWrap = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardList = ({ cards }) => {
  return (
    <React.Fragment>
      {cards.map(card => (
        <CardWrap key={card.id}>
          <Card {...card} />
        </CardWrap>
      ))}
    </React.Fragment>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(CardPropTypes).isRequired,
};
