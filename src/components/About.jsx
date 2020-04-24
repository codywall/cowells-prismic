import React from 'react';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import Button from 'components/_ui/Button';
import colors from 'styles/colors';

const AboutContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const SecondaryButton = styled(Button)`
  color: ${colors.blue1000};
  background: white;
`;

const AboutBio = styled('div')`
  padding-bottom: 1em;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.maxwidthMobile}px) {
    width: 95%;
  }

  h3 {
    line-height: 44px;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 22px;
  }

  p {
    font-size: 18px;
    line-height: 33px;
    width: 88%;
    align-self: center;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 85%;
  align-self: center;
`;

const About = ({
  title,
  bio,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
}) => (
  <AboutContainer>
    <AboutBio>
      {RichText.render(title)}
      {RichText.render(bio)}
    </AboutBio>
    <ButtonWrapper>
      <a href={primaryLink}>
        <Button>{primaryText}</Button>
      </a>
      <a href={secondaryLink}>
        <SecondaryButton>{secondaryText}</SecondaryButton>
      </a>
    </ButtonWrapper>
  </AboutContainer>
);

export default About;

About.propTypes = {
  bio: PropTypes.array.isRequired,
};
