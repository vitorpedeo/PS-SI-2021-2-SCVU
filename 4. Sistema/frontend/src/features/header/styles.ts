import styled from 'styled-components';

type DrawerProps = {
  isOpen: boolean;
};

export const DrawerContainer = styled.div<DrawerProps>`
  width: 100%;
  height: 100vh;
  background: red;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 998;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;
