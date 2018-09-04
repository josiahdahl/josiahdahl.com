import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../styles/util';

const Content = styled.div`
  padding: ${pxToRem(65)} ${pxToRem(100)};
  max-width: 700px;
`;

export default Content;