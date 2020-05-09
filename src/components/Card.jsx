import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colors from 'styles/colors';

const CardDiv = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 235px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 700px) {
      max-width: 320px;
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(even) {
        margin-right: 0;
      }
    }

    @media (min-width: 980px) {
    &:nth-child(even) {
      margin-right: 20px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

const ImageContainer = styled('div')`
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

const CardText = styled('div')`
  background-color: ${colors.cyan100};
  margin: 10px;
  height: 180px;
  padding: 15px;
  p {
    font-size: .8rem;
  }
`;

const Card = ({ title, text, image }) => (
  <CardDiv>
    <ImageContainer>
      <img style={{ width: '300px' }} src={image.url} alt={image.alt} />
    </ImageContainer>
    <CardText>{title} {text}</CardText>
  </CardDiv>
);

export default Card;

Card.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired
};
