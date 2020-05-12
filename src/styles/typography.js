import css from '@emotion/css';
import './fonts.scss';
import breakpoints from 'styles/breakpoints';

const headingFont = 'Roboto'

const typeStyles = css`
  h1 {
    font-family: ${headingFont}, sans-serif;
    font-size: 2.8rem;
    line-height: 1.45;
    font-weight: 800;

    @media (max-width: ${breakpoints.maxwidthTablet}px) {
      font-size: 2.25rem;
    }

    @media (max-width: ${breakpoints.maxwidthMobile}px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-family: ${headingFont}, sans-serif;
    margin-bottom: 2rem;
    font-size: 1.9rem;
    line-height: 1.1;
  }

  h3 {
    font-family: ${headingFont}, sans-serif;
    line-height: 1.2;
    font-size: 1.5rem;
  }

  h5 {
    font-family: ${headingFont}, sans-serif;
    margin-bottom: 1.45rem;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.95rem;
  }

  h6 {
    font-family: ${headingFont}, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0;
  }

  p {
    line-height: 1.9;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default typeStyles;
