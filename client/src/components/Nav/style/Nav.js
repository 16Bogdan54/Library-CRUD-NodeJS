import styled from 'styled-components';
import {Link} from "react-router-dom"

export const Nav = styled.nav`
  height: 10vh;
  background-color: #B9BAA3;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  text-decoration: none;
  color: #0A100D;
  svg {
    font-size: 2rem;
    margin-right: .4rem;
    transition: font-size .4s ease-out;
  }
  &:hover {
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #55584B;
  text-decoration: none;
  border: solid 2px transparent;
  transition: all .3s ease;
  &:hover {
    color: #0A100D;
    border: solid 2px #0A100D;
    padding: .3rem;
  }
`