import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}
export const Cover = styled.div`
  video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }
`;
export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  //border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3rem;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textLight};
    transition: 0.5;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
