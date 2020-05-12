import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Intro from '../components/Intro'
import Card from '../components/Card';
import Map from '../components/Map';
import CardWrapper from '../components/CardWrapper';
import { RichText } from 'prismic-reactjs';

const MapWrapper = styled('div')`
  max-width: 800px;
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
        <CardWrapper>
        {sections.map((section, i) => (
          <Card
            text={RichText.render(section.node.about_section_text)}
            title={RichText.render(section.node.about_card_title)}
            image={section.node.about_section_image}
            key={i}
          />
        ))}
            </CardWrapper>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <label>
                Message
                <input type="text" name="message" />
                </label>
            <button type="submit">Submit</button>
        </form>
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
