import React from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import Iframe from 'react-iframe';

const FooterContainer = styled('div')`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.blue700};

  svg {
    max-width: 50px;
  }
`;

const MapWrapper = styled('div')``;

const FooterCopyright = styled('span')`
  font-size: 0.75em;
  color: ${colors.blue100};
`;

const FooterAuthor = styled('a')`
  color: ${colors.blue400};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${colors.blue600};
  }
`;

const Footer = () => (
  <FooterContainer>
    <MapWrapper>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12751.7867129759!2d-122.0238455!3d36.9633303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97077c695748cab1!2sCowell&#39;s%20Beach%20Surf%20Shop!5e0!3m2!1sen!2sus!4v1585761904439!5m2!1sen!2sus"
        width="100%"
        height="100%"
        frameborder="0"
        style={{ border: '0' }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
    </MapWrapper>
    <FooterCopyright>
      © 2020 Cowell's Surf Shop — Website by{' '}
      <FooterAuthor href="https://codywall.com">Cody Wall</FooterAuthor>
    </FooterCopyright>
  </FooterContainer>
);

export default Footer;
