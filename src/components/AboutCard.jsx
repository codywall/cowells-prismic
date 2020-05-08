import React from 'react';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';
import colors from 'styles/colors';
import About from './About';

const Card = styled('div')`
    width: 600px;
    align-self: center;
    text-align: center;
    
    p {
        font-size: 1em;
    }
`

const AboutCard = () => (
    <Card>
        <h3>About Our Shop</h3>
        <p>We have been a locally owned business for over 20 years,
        and have introduced countless people to the joy of surfing.
        We have a wide selection of clothing, rentals, and boards.
            </p>
    </Card>
);

export default AboutCard;
