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
  margin-top: 80px;
`;
const HeroImage = styled('div')`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  height: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

const HeroText = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Section = styled('div')`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Report = styled('div')``;

const RenderBody = ({ home, reports, meta }) => (
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
      <HeroImage style={{ backgroundImage: `url(${home.hero_image.url})` }} />
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
        <Report>
          <h3>
            Cowell's is {reports.swell.minBreakingHeight} -{' '}
            {reports.swell.maxBreakingHeight} {reports.swell.unit} today
          </h3>
        </Report>
      </HeroText>
    </HeroWrapper>
  </>
);

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  const reports = data.allSurfReport.edges[0].node;
  const meta = data.site.siteMetadata;

  if (!doc) return null;

  return (
    <Layout>
      <RenderBody home={doc.node} reports={reports} meta={meta} />
    </Layout>
  );
};

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  reports: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    allSurfReport {
      edges {
        node {
          swell {
            maxBreakingHeight
            minBreakingHeight
            unit
          }
          condition {
            temperature
            unit
          }
          timestamp
        }
      }
    }
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
