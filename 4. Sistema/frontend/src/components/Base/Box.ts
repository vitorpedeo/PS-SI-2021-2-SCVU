import styled from 'styled-components';
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  shadow,
  space,
  typography,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type BoxProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export const Box = styled('div')<BoxProps>(
  compose(border, color, flexbox, grid, layout, shadow, space, typography),
);
