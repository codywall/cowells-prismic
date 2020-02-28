import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const RentalItemContent = styled('div')`
  display: flex;
`;

const RentalItemName = styled('div')``;

const RentalItemPrice = styled('div')``;

const RentalItemIcon = styled('div')``;

const RentalItem = ({ icon, name, price }) => (
  <RentalItemContent>
    <RentalItemIcon>
      <img src={icon.url} alt={icon.alt} />
    </RentalItemIcon>
    <RentalItemName>{RichText.render(name)}</RentalItemName>
    <RentalItemPrice>{RichText.render(price)}</RentalItemPrice>
  </RentalItemContent>
);

export default RentalItem;

RentalItem.propTypes = {
  icon: PropTypes.object.isRequired,
  name: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
};
