import styled from 'styled-components';
import {
  compose,
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

export const Heading = styled('h1')<HeadingProps>(
  ({ theme }) => ({
    color: theme.colors.dark,
    fontWeight: theme.fontWeights.bold,
    letterSpacing: '0.02rem',
  }),
  compose(color, space, typography),
);
