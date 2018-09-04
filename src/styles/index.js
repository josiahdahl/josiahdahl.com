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
  
  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }
`;
