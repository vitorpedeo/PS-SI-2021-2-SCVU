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

type TextProps = ColorProps & SpaceProps & TypographyProps;

export const Text = styled('p')<TextProps>(
  ({ theme }) => ({
    color: theme.colors['mid-dark'],
    fontWeight: theme.fontWeights.normal,
    letterSpacing: '0.02rem',
  }),
  compose(color, space, typography),
);
