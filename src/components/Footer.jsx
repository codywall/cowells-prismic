import React from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import Iframe from 'react-iframe';
import Map from '../components/Map'

const FooterContainer = styled('div')`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${colors.blue1000};
  color: ${colors.yellow100};

  svg {
    max-width: 50px;
  }
`;

const FooterContent = styled('div')`
  margin: 0 10px;
  h4 {
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 5px;
    margin-top: 0;
  }
  p {
    line-height: 1.4;
    font-size: 0.9rem;
  }
  a {
    color: ${colors.yellow100};
    text-decoration: none;
  }

`
const MapWrapper = styled('div')`
  height: 70%;
  max-width: 200px;
`;

const Footer = ({ data }) => {
  // const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();

  return (
    <FooterContainer>
      <FooterContent>
        <h4>Follow</h4>
        <p><a href='facebook'>Facebook</a></p>
        <p><a href='instagram'>Instagram</a></p>
      </FooterContent>
      <FooterContent>
        <h4>Contact</h4>
        <p><a href='tel:+1-831-427-2355'>(831) 427-2355</a></p>
        <p><a href='@mailto:kathy@cowellssurfshop.com'>kathy@cowellssurfshop.com</a></p>
      </FooterContent>
      <FooterContent>
        <h4>Visit</h4>
        <p>Open 8-5 Daily</p>
        <p>30 Front St.</p>
        <p>Santa Cruz, CA 95060</p>
      </FooterContent>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </FooterContainer>
  );
};

export default Footer;
