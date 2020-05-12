import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import breakpoints from 'styles/breakpoints';
import logo from '../images/logo.png';
import { faBars, faPhone, faPhoneAlt, faPhoneSlash, faPhoneSquare, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faInstagram, faFacebookF, faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//   #close__button--wrapper{
//     position: absolute;
//     left: 1em;
//     top: 1em;
//     width: 15px;
//     height: 15px;
//     cursor: pointer;
//     z - index: 200;
//   }

//   #close__button {
//     font - size: 2.25em;
//     color: $white - color;
//     background: none;
//     border: none;
//   }
// }

// #nav__modal {
//   position: fixed;
//   top: 0;
//   right: 0;
//   height: 100vh;
//   width: 100vw;
//   background - color: rgba(0, 0, 0, .8);
//   overflow: hidden;
//   z - index: 0;
// }

// .closed {
//   display: none;
// }

// .open {
//   display: block;
// }


const HeaderContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  height: 90px;
  list-style-type: none;
  background-color: ${colors.grey100};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99999999;
  transition: top 0.3s;
  @media (max-width: ${breakpoints.maxwidthTablet}px) {
    justify-content: space-between;
  }
`;

const NavLinksDesktop = styled('div')`
    display: none;
    margin: 0 auto;

    @media (min-width: ${breakpoints.maxwidthTablet}px) {
      display: block
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

const DesktopWrapper = styled('div')`
    text-align: center;
    a {
      text-decoration: none;
      display: inline-block;
      padding: 0 2rem;
    }  
`

const NavLinksMobile = styled('div')`
    transition: left 0.5s ease;
    align-self: flex-start;
    cursor: pointer;
    font-size: 1.5em;
    z-index: 99;
    button {
      cursor: pointer;
      border:none;
      background-color:transparent;
      font-size: 2.5rem;
      font-weight: 800;
    }
    @media (min-width: ${breakpoints.maxwidthTablet}px) {
      display: none;
    }
`
const MobileWrapper = styled('div')`
  display: none;
  padding: 40px;
  background: ${colors.blue100};
  border-radius: 8px;
  box-shadow: 0 4px 6x;
  a {
    color: ${colors.blue900};
    margin: 10px;
    display: inline-block;
    padding: 1vw 2vw;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 800;
  }
  Link: first-child {
    margin-right: auto;
  `

const Logo = styled('img')`
  width: 90px;
`;

const HeaderCorner = styled('div')`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: ${colors.grey900};
  }
`

const burgerToggle = () => {
  let linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
  }
};

const Header = () => (
  <HeaderContainer>
    <NavLinksMobile>
      <HeaderCorner>
        <button onClick={burgerToggle} onKeyDown={burgerToggle}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: '2.5rem' }} />
        </button>
      </HeaderCorner>
      <MobileWrapper className="narrowLinks">
        <Link activeClassName="Link--is-active" to="/" onClick={burgerToggle} onKeyDown={burgerToggle}>
          Home
        </Link>
        <Link activeClassName="Link--is-active" to="/about" onClick={burgerToggle} onKeyDown={burgerToggle}>
          About Us
        </Link>
        <Link activeClassName="Link--is-active" to="/rentals" onClick={burgerToggle} onKeyDown={burgerToggle}>
          Rentals
        </Link>
        <Link activeClassName="Link--is-active" to="/contact" onClick={burgerToggle} onKeyDown={burgerToggle}>
          Contact
        </Link>
      </MobileWrapper>
    </NavLinksMobile>
    <a href="/">
      <Logo src={logo} />
    </a>
    <NavLinksDesktop>
      <DesktopWrapper>
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
      </DesktopWrapper>
    </NavLinksDesktop>

    <HeaderCorner>
      <a href="tel:+1-831-427-2355">
        <FontAwesomeIcon icon={faPhoneSquare} />
      </a>
      <a href="https://www.facebook.com/cowellssurfshop/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/cowellssurfshop/">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
    </HeaderCorner>
  </HeaderContainer >
);

export default Header;
