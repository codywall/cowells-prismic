import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import breakpoints from 'styles/breakpoints';
import Button from 'components/_ui/Button';
import About from 'components/About';
import Layout from 'components/Layout';

const Hero = styled('div')`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`;

const Hours = styled('div')`
  width: 100vw;
  display: flex;
  align-content: center;
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
    <Hero style={{ backgroundImage: `url(${home.hero_image.url})` }}>
      <>{RichText.render(home.hero_title)}</>
      <a
        href={home.hero_button_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>{RichText.render(home.hero_button_text)}</Button>
      </a>
    </Hero>
    <Hours>
      <span>Hours</span>
      {RichText.render(home.hours)}
    </Hours>
    {/* <h3>
      Cowell's is {reports.swell.minBreakingHeight} -{' '}
      {reports.swell.maxBreakingHeight} {reports.swell.unit} today
    </h3> */}
    <Section>
      <About title={home.about_title} bio={home.about_bio} />
    </Section>
  </>
);

export default ({ data }) => {
  console.log(data);
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  const projects = data.prismic.allProjects.edges;
  const reports = data.allSurfReport.edges[0].node;
  const meta = data.site.siteMetadata;

  if (!doc || !projects) return null;

  return (
    <Layout>
      <RenderBody
        home={doc.node}
        reports={reports}
        projects={projects}
        meta={meta}
      />
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
            hero_title
            hero_image
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            hours
            about_title
            about_bio
            about_links {
              about_link
            }
          }
        }
      }
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
            }
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
