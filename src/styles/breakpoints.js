import { css } from 'styled-components';

export const breakpoints = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

export const sizes = {
  xs: {
    min: '540px',
    max: '539px',
  },
  sm: {
    min: '768px',
    max: '767px',
  },
  md: {
    min: '992px',
    max: '991px',
  },
  lg: {
    min: '1200px',
    max: '1199px',
  },
  xl: {
    min: '1500px',
    max: '1499px',
  },
};

export const breakpoint = (size, styles, type = 'min-width') => {
  const pxVal = type === 'min-width' ? sizes[size].min : sizes[size].max;
  return css`
    @media(${type}: ${pxVal}) {
      ${styles}
    }
`
};

export const minWidth = Object.keys(breakpoints).reduce((acc, label) => {
  console.log(sizes[label]);
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const maxWidth = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] - 1}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

console.log(maxWidth);