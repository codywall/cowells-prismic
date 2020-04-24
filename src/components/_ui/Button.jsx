import React, { Component } from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import breakpoints from 'styles/breakpoints';

const ButtonContainer = styled('button')`
  padding: 1em 1.75em;
  background: ${colors.yellow500};
  font-weight: 600;
  color: ${colors.yellow900};
  outline: none;
  border: none;
  font-size: 0.9rem;
  border-radius: 4px;
  position: relative;
  transition: background 100ms ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1) @media
    (max-width: ${breakpoints.maxwidthMobile}px) {
    padding: 0.8em 1.8em;
    font-size: 0.9rem;
  }

  p {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    transition: background 100ms ease-in-out;
  }
`;

class Button extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <ButtonContainer onClick={this.props.onClick} {...props}>
        {this.props.children}
      </ButtonContainer>
    );
  }
}

export default Button;
