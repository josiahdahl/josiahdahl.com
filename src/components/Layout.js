import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme } from '../styles/themes';
import '../styles';
import SideBar from './SideBar';
import Content from './Content';
import styled from 'styled-components';

const LayoutGrid = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: stretch;
`;

const LayoutNavBar = styled(SideBar)`
  max-width: 15rem;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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
