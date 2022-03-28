import styled from 'styled-components';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  shadow,
  space,
  typography,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type ButtonProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export const Button = styled('button')<ButtonProps>(
  ({ theme }) => ({
    border: `none`,
    borderRadius: 4,
    background: theme.colors.blue,
    color: 'white',
    fontSize: '1rem',
    fontWeight: theme.fontWeights.bold,
    cursor: 'pointer',
    transition: 'filter 0.2s',
    '&:not(:disabled):hover': {
      filter: 'brightness(0.9)',
    },
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'solid',
      boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${theme.colors.blue}`,
    },
    '&:disabled': {
      background: theme.colors['mid-light'],
      cursor: 'default',
    },
  }),
  compose(border, color, flexbox, layout, shadow, space, typography),
);
