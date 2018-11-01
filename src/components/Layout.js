import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme, lightTheme } from '../styles/themes';
import '../styles';
import NavBar from './NavBar';
import Content from './Content';
import styled from 'styled-components';
import { breakpoints, minWidth, sizes } from "../styles/breakpoints";

const LayoutGrid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: stretch;
  @media(min-width: ${sizes.md.min}) {
    flex-direction: row;
  }
`;

const LayoutNavBar = styled(NavBar)`
  width: 100%;
  ${minWidth[breakpoints.md]`max-width: 15rem;`};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LayoutGrid>
        <Helmet title="Josiah Dahl - Full stack web developer" />
        <LayoutNavBar />
        <Content>{children}</Content>
      </LayoutGrid>
    </ThemeProvider>
  );
};

Layout.propTypes = {};

export default Layout;
