import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme } from '../styles/themes';
import '../styles';
import NavBar from './NavBar';
import Content from './Content';
import styled from 'styled-components';
import { breakpoints, minWidth, sizes } from '../styles/breakpoints';

const LayoutGrid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: stretch;
  @media (min-width: ${sizes.md.min}) {
    flex-direction: row;
  }
`;

const LayoutNavBar = styled(NavBar)`
  width: 100%;
  ${minWidth[breakpoints.md]`max-width: 15rem;`};
`;

const transformHelmet = helmetProps => {
  let { title } = helmetProps;
  if (!title || title.length === 0) {
    title = 'Josiah Dahl - Full stack web developer';
  } else {
    title = `${title} | Josiah Dahl`;
  }
  return {
    ...helmetProps,
    title,
  };
};

const Layout = ({ helmetProps, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutGrid>
        <Helmet {...transformHelmet(helmetProps)}>
          <html lang="en" />
        </Helmet>
        <LayoutNavBar />
        <Content id="page-content">{children}</Content>
      </LayoutGrid>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  helmetProps: PropTypes.shape({
    title: PropTypes.string,
  }),
};
Layout.defaultProps = {
  helmetProps: {
    title: undefined,
  },
};

export default Layout;
