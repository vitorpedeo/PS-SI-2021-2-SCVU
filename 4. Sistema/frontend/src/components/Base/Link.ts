import styled from 'styled-components';
import {
  compose,
  color,
  flexbox,
  layout,
  space,
  typography,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type TextProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const Link = styled('a')<TextProps>(
  ({ theme }) => ({
    color: theme.colors.blue,
    fontWeight: theme.fontWeights.medium,
    letterSpacing: '0.02rem',
    textDecoration: 'none',
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'solid',
      boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${theme.colors.blue}`,
    },
  }),
  compose(color, flexbox, layout, space, typography),
);
