import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import breakpoints from 'styles/breakpoints';
import logo from '../images/logo.png';

// .desktop__list {
//   display: none;
// }

// nav {




//   .nav__item: first - child {
//     margin - right: auto;
//   }

//   .nav__item--active {
//     color: pink!important;
//   }

// #menu - toggle {
//   position: absolute;
//   left: 1.5em;
//   top: 1.5em;
//   cursor: pointer;

//     .line{
//     width: 30px;
//     height: 3px;
//     margin: 8px 0;
//     background - color: $primary - color;
//   }

//     .line--last {
//     width: 20px;
//   }
// }




// .nav__link {
//   color: $white - color;
// }

// .active{
//   left: 0;
// }

// .active:: after {
//   transform: rotate(45deg);
// }

//  .active:: before {
//   transform: rotate(-45deg);
// }

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
  padding:0;
  height: 90px;
  list-style-type: none;
  background-color: ${colors.grey100};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99999999;
  margin: 0 0 40px 0;
  transition: top 0.3s;
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
    cursor: pointer;
    font-size: 1.5em;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 99;
    button {
      position: absolute;
      cursor: pointer;
      border:none;
      background-color:transparent;
      font-size: 4rem;
      font-weight: 800;
    }
    @media (min-width: ${breakpoints.maxwidthTablet}px) {
      display: none;
    }
`
const MobileWrapper = styled('div')`
  display: none;
  padding: 110px 0 300px 60px;
  background: white;
  a {
    text-decoration: none;
      display: block;
      float: left;
      clear: left;
      padding: 0.5em 0;
  }
  Link {
    color: white;
    margin: 10px;
    display: inline-block;
    padding: 1vw 2vw;
    text-decoration: none;
    font-size: 1.5em;
  }
  Link: first-child {
    margin-right: auto;
  `

const Logo = styled('img')`
  width: 90px;
`;

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

    <NavLinksMobile>
      <button onClick={burgerToggle} onKeyDown={burgerToggle}>&#9776;</button>
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
  </HeaderContainer>
);

export default Header;
