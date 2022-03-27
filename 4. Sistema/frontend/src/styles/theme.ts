import { DefaultTheme } from 'styled-components';

const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em'];

const colors = {
  white: '#fff',
  blue: '#2968C8',
  dark: '#323232',
  'mid-dark': '#4A4A4A',
  light: '#F9F9F9',
  'mid-light': '#D2D2D2',
};

const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

const space = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];

export const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontWeights,
  space,
};
