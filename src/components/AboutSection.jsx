import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colors from 'styles/colors';

const AboutSectionContent = styled('div')`
  display: flex;
  flex-direction: column;
  width: 235px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6;
`;

const AboutSectionImageContainer = styled('div')`
  width: 130px;
  height: 130px;
  align-self: center;
  z-index: 999;
  margin-top: 10px;
  margin-bottom: -40px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 6px solid white;
`;

const AboutSectionText = styled('div')`
  background-color: ${colors.blue200};
  margin: 10px;
  height: 180px;
  padding: 15px;
  p {
    font-size: .8rem;
  }
`;

const AboutSection = ({ title, text, image }) => (
  <AboutSectionContent>
    <AboutSectionImageContainer>
      <img style={{ width: '300px' }} src={image.url} alt={image.alt} />
    </AboutSectionImageContainer>
    <AboutSectionText>{RichText.render(title)} {RichText.render(text)}</AboutSectionText>
  </AboutSectionContent>
);

export default AboutSection;

AboutSection.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired
};
