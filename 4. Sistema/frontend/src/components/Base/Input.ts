import styled from 'styled-components';
import {
  border,
  color,
  compose,
  layout,
  shadow,
  space,
  typography,
  BorderProps,
  ColorProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type InputProps = BorderProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export const Input = styled('input')<InputProps>(
  ({ theme }) => ({
    padding: '0 0.75rem',
    width: '100%',
    height: 48,
    border: `1px solid ${theme.colors['mid-light']}`,
    borderRadius: 4,
    fontSize: '1rem',
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'solid',
      boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${theme.colors.blue}`,
    },
  }),
  compose(border, color, layout, shadow, space, typography),
);
