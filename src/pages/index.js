import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';
import About from 'components/About';
import Layout from 'components/Layout';

const HeroWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const HeroImage = styled('div')`
  height: 400px;
  width: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    display: inline;
    margin: 0 auto;
  }
  @media (max-width: 1100px) {
    width: 40vw;
    height: 40vw;
  }
  @media (max-width: 800px) {
    width: 50vw;
    height: 50vw;
  }
`;

const HeroText = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 450px;
  @media (max-width: 1100px) {
    max-width: 50vw;
  }
  @media (max-width: 800px) {
    max-width: 95vw;
    margin-top: 30px;
  }


`;

const Section = styled('div')`
  padding: 20px 0 1em 5em;
  text-align: center;
  margin-bottom: 1em;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: ${breakpoints.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;


const RenderBody = ({ home, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <HeroWrapper>
      <HeroImage>
        <img src={home.hero_image.url} alt="" />
      </HeroImage>
      <HeroText>
        <Section>
          <About
            title={home.about_title}
            bio={home.about_bio}
            primaryText={home.hero_button_1_text}
            primaryLink={home.hero_button_1_link}
            secondaryText={home.hero_button_2_text}
            secondaryLink={home.hero_button_2_Link}
          />
        </Section>
      </HeroText>
    </HeroWrapper>
  </>
);

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  const meta = data.site.siteMetadata;

  if (!doc) return null;

  return (
    <Layout>
      <RenderBody home={doc.node} meta={meta} />
    </Layout>
  );
};

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_image
            hero_button_1_text
            hero_button_1_link
            hero_button_2_text
            hero_button_2_link
            content
            hours
            about_title
            about_bio
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
