import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Intro from '../components/Intro'
import AboutSection from '../components/AboutSection';
import Map from '../components/Map';

const AboutWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`

const MapWrapper = styled('div')`
  width: 600px;
  height: 400px;
  align-self: center; 
`

const Work = ({ sections, meta }) => (
  <>
    <Helmet
      title={`About | Cowell's Surf Shop`}
      titleTemplate={`%s | About | Cowell's Surf Shop`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `About | Cowell's Surf Shop`,
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
    <Layout>
      <Intro title="About Our Shop"
        text="We have been a locally owned business for over 20 years, 
        and have introduced countless people to the joy of surfing. 
        We have a wide selection of clothing, rentals, and boards."/>
        <AboutWrapper>
        {sections.map((section, i) => (
          <AboutSection
            text={section.node.about_section_text}
            title={section.node.about_card_title}
            image={section.node.about_section_image}
            key={i}
          />
        ))}
      </AboutWrapper>
      <Intro title="Our Location"
        text="We are located directly across the street from Cowell’s Beach, one of the best beginner surf spots in the United States. Come surf with us today!" />
      <MapWrapper>
        <Map />
      </MapWrapper>
    </Layout>
    </>
);

export default ({ data }) => {
  const sections = data.prismic.allAbout_sections.edges;
  console.log(sections);
  const meta = data.site.siteMetadata;
  if (!sections) return null;

  return <Work meta={meta} sections={sections} />;
};

Work.propTypes = {
  sections: PropTypes.array.isRequired,
};

export const query = graphql`
  {
    prismic {
      allAbout_sections {
        edges {
          node {
            about_section_image
            about_section_text
            about_card_title
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
