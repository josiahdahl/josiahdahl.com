import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { CardPropTypes } from '../Card';
import Card from '../Card';

const CardContainer = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 1200px) {
    ${props =>
      props.isTiled
        ? css`
            box-sizing: border-box;
            width: 50%;
            padding: 1rem;
            flex-grow: 1;
          `
        : ''};
  }
`;

CardContainer.propTypes = {
  isTiled: PropTypes.bool.isRequired,
};

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    ${props =>
      props.isTiled
        ? css`
            flex-direction: row;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: stretch;
          `
        : ''};
  }
`;

const CardListCard = styled(Card)`
  height: 100%;
  box-sizing: border-box;
`;

const WrappedCard = ({ card, ...rest }) => (
  <CardContainer {...rest}>
    <CardListCard {...card} />
  </CardContainer>
);

export const CardList = ({ cards, isTiled }) => {
  return (
    <CardListContainer isTiled={isTiled}>
      {cards.map((card, i) => (
        <WrappedCard key={i} card={card} isTiled={isTiled} />
      ))}
    </CardListContainer>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)).isRequired,
  isTiled: PropTypes.bool,
};

CardList.defaultProps = {
  isTiled: false,
};
