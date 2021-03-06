import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { defaultTheme as theme } from './themes';

injectGlobal`
  ${styledNormalize}
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-family: ${theme.fontStack};
    font-size: ${theme.baseFontSizePx}px;
  }
  body, html {
    min-height: 100%;
  }
  body {
    background-color: ${theme.dark};
    color: ${theme.text};
  }
  
  h1,h2,h3,h4,h5,h6 {
    color: ${theme.light};
  }
  
  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }
  
  blockquote {
    border-left: 2px solid ${theme.accent};
    box-sizing: border-box;
    padding-left: 1rem;
  }
  
  a {
    color: ${theme.accent};
    font-weight: bold;
    text-decoration: none;
  }
`;
