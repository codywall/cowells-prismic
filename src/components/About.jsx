import React from 'react';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';

const AboutContainer = styled('div')`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
`;

const AboutBio = styled('div')`
  padding-bottom: 3em;
  max-width: 680px;

  @media (max-width: ${breakpoints.maxwidthMobile}px) {
    width: 95%;
  }
`;

const About = ({ title, bio }) => (
  <AboutContainer>
    <AboutBio>
      <h4>{RichText.render(title)}</h4>
      {RichText.render(bio)}
    </AboutBio>
  </AboutContainer>
);

export default About;

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
};
