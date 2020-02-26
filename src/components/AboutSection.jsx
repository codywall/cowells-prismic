import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const AboutSectionContent = styled('div')`
  display: flex;
`;

const AboutSectionText = styled('div')``;

const AboutSectionImageContainer = styled('div')``;

const AboutSection = ({ text, image }) => (
  <AboutSectionContent>
    <AboutSectionText>{RichText.render(text)}</AboutSectionText>
    <AboutSectionImageContainer>
      <img src={image.url} alt={image.alt} />
    </AboutSectionImageContainer>
  </AboutSectionContent>
);

export default AboutSection;

AboutSection.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.array.isRequired,
};
