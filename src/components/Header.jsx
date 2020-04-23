import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import breakpoints from 'styles/breakpoints';
import logo from '../images/logo.png';

const HeaderContainer = styled('div')`
  margin-top: 0;
  height: 105px;
  padding-top: 0.75em;
  padding-bottom: 3em;
  border-bottom: 9px solid ${colors.blue400};
  width: 100vw;
`;

const HeaderContent = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 142px;
`;

const NavLinks = styled('div')`
  display: flex;
  justify-content: flex-start;
  grid-gap: 4.35em;

  @media (max-width: ${breakpoints.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${breakpoints.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 1rem;
    height: 100%;
    display: block;
    position: relative;
    &:hover {
      color: ${colors.blue200};
      transition: 100ms ease-in-out background;
    }
  }

  &.Link--is-active {
    background: ${colors.blue500};
    transition: 100ms ease-in-out background;
  }
`;

const Logo = styled('img')`
  width: 90px;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NavLinks>
        <Link activeClassName="Link--is-active" to="/">
          Home
        </Link>
        <Link activeClassName="Link--is-active" to="/about">
          About Us
        </Link>
        <Link activeClassName="Link--is-active" to="/rentals">
          Rentals
        </Link>
        <Link activeClassName="Link--is-active" to="/contact">
          Contact
        </Link>
      </NavLinks>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
