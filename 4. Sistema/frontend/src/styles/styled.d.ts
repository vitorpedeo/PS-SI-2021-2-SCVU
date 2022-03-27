import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Array<string | number>;
    colors: {
      white: string;
      blue: string;
      dark: string;
      'mid-dark': string;
      light: string;
      'mid-light': string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
    space: Array<string | number>;
  }
}
