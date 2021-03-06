import React from 'react';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';

const IntroContainer = styled('div')`
    width: 600px;
    align-self: center;
    text-align: center;
    margin-bottom: 60px;
    
    p {
        font-size: 1em;
    }

    @media (max-width: ${breakpoints.maxwidthTablet}px) {
        max-width: 85vw;
        margin-bottom: 40px;
        font-size: 1.1rem;
    }
`

const Intro = (props) => (
    <IntroContainer>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </IntroContainer>
);

export default Intro;
