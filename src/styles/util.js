import { defaultTheme as theme } from './themes';

const remCalc = fontSize => px => `${(px / fontSize).toFixed(4)}rem`;

export const pxToRem = remCalc(theme.baseFontSizePx);
