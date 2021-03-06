import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import breakpoints from 'styles/breakpoints';
import Footer from 'components/Footer';
import Header from 'components/Header';
import colors from 'styles/colors';
import 'styles/fonts.scss';

const LayoutContainer = styled.div`
  max-width: ${breakpoints.maxwidthDesktop}px;
  padding-left: ${breakpoints.paddingHorizontalDesktop}em;
  padding-right: ${breakpoints.paddingHorizontalDesktop}em;
  margin: 0 auto;

  @media (max-width: ${breakpoints.maxwidthTablet}px) {
    padding-left: ${breakpoints.paddingHorizontalTablet}em;
    padding-right: ${breakpoints.paddingHorizontalTablet}em;
  }

  @media (max-width: ${breakpoints.maxwidthMobile}px) {
    padding-left: ${breakpoints.paddingHorizontalMobile}em;
    padding-right: ${breakpoints.paddingHorizontalMobile}em;
  }

  .Layout__content {
    padding-bottom: 5em;
    display: flex;
    flex-direction: column;
  }
`;

const LayoutWrapper = styled('div')`
  background: ${colors.grey100};
  padding-top: 90px
`;

const staticQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={`${staticQuery}`}
    render={data => (
      <>
        <Header />
        <LayoutWrapper>
          <LayoutContainer className="div">
            <Global styles={[globalStyles, typeStyles]} />
            <div className="Layout">
              <main className="Layout__content">{children}</main>
            </div>
          </LayoutContainer>
        </LayoutWrapper>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
