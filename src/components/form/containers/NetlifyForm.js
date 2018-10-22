import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FlyTrap = styled.p`
  display: none;
`;

export const NetlifyForm = ({ children, name, action, onSubmit }) => {
  return (
    <form
      action={action}
      name={name}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="full-name"
      onSubmit={onSubmit}
    >
      <FlyTrap>
        <label htmlFor="full-name">
          Do not fill this label:{' '}
          <input type="text" tabIndex="-1" name="full-name" />
        </label>
      </FlyTrap>
      {children}
      <input type="hidden" name="form-name" value={name} />
    </form>
  );
};

NetlifyForm.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
