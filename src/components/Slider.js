import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { sizes } from "../styles/breakpoints";

export const SliderBackdrop = styled.div`
  position: relative;
  background-color: transparent;
  @media (max-width: ${sizes.md.max}) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${props =>
      props.isHidden ? 'transparent' : 'rgba(0, 0, 0, 0.7)'};
    transition: 0.3s background-color;
    pointer-events: ${props => (props.isHidden ? 'none' : 'all')};
  }
`;

export const SliderContent = styled.div`
  position: relative;
  transform: none;
  @media (max-width: ${sizes.md.max}) {
    transition: 0.3s transform;
    transform: ${props =>
      props.isHidden ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)'};
    pointer-events: ${props => (props.isHidden ? 'none' : 'all')};
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0 1rem;
  }
`;

export const Slider = ({
  isHidden,
  disabledBreakpoint: disabledAtPx,
  onBackdropClick,
  children,
}) => (
  <SliderBackdrop
    isHidden={isHidden}
    disabledBreakpoint={disabledAtPx}
    onClick={onBackdropClick}
  >
    <SliderContent
      isHidden={isHidden}
      disabledBreakpoint={disabledAtPx}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </SliderContent>
  </SliderBackdrop>
);

Slider.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  disabledAtPx: PropTypes.oneOf(Object.values(sizes).map(s => s.max))
    .isRequired,
  onBackdropClick: PropTypes.func,
};

Slider.defaultProps = {
  onBackdropClick: () => {},
};
