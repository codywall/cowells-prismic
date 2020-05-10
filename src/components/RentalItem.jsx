import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const RentalItemContent = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 0;
  width: 260px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6;
  margin-bottom: 20px;
  align-items: center;

  @media(min-width: 700px) {
    max-width: 320px;
    margin-right: 20px;
    margin-bottom: 20px;
      &: nth-child(even) {
      margin-right: 0;
    }
  }

  @media(min-width: 980px) {
    &: nth-child(even) {
      margin-right: 20px;
    }
    &: nth-child(3n) {
      margin-right: 0;
    }
  }
`;

const RentalItemName = styled('div')`
  font-size: 1.2rem;
  font-weight: 500;
  p {
    margin: 0;
  }
`;

const RentalItemPrice = styled('div')`
  font-size: .9rem;
  font-weight: 400;
  p {
    margin: 0;
  }
`;

const RentalItem = ({ name, price }) => (
  <RentalItemContent>
    <RentalItemName>{RichText.render(name)}</RentalItemName>
    <RentalItemPrice>{RichText.render(price)}</RentalItemPrice>
  </RentalItemContent>
);

export default RentalItem;

RentalItem.propTypes = {
  name: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
};
