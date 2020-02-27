import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';

const WorkTitle = styled('h1')`
  margin-bottom: 1em;
`;

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
      <WorkTitle>About</WorkTitle>
      <>
        {sections.map((section, i) => (
          <AboutSection
            text={section.node.about_section_text}
            image={section.node.about_section_image}
          />
        ))}
      </>
    </Layout>
  </>
);

export default ({ data }) => {
  console.log(data);
  const sections = data.prismic.allAbout_sections.edges;
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
