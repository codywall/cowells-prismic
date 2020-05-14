import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';
import About from 'components/About';
import Layout from 'components/Layout';
import swell from '../images/swell.png';
import weather from '../images/weather.png';
import temperature from '../images/temperature.png';
import moment from 'moment';
import colors from 'styles/colors';

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
  display: flex;
  flex-direction: column;
  padding: 0 0 1em 5em;
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

const SurfReport = styled('div')`
  align-self: center;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 350px;
  max-width: 550px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6;
  @media (max-width: 800px) {
    width: 90%;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

const ReportNodes = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px;
  h5 {
    font-size: 0.8rem;
    color: ${colors.grey700};
  }
  h3 {
    font-size: 1.1rem;
  }
`;
const ReportNode = styled('div')`
  width: 30%;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    margin-bottom: 0.25rem;
  }
  h3 {
    margin-top: 5px;
    font-size: 1.3rem;
  }
`;

const ReportHeadline = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${colors.blue900};
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  position: absolute;
  top: 0;
  span {
    color: white;
    font-size: 0.8rem;
  }
`;

const RenderBody = ({ home, report, meta }) => (
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
            secondaryLink={home.hero_button_2_link}
          />
          <SurfReport>
            <ReportHeadline>
              <span>Cowell’s Beach Surf Report</span>
              <span>{moment().format('MMMM Do YYYY')}</span>
            </ReportHeadline>
            <ReportNodes>
              <ReportNode>
                <h5 style={{ marginTop: '22px' }}>Swell</h5>
                <img src={swell} alt="" />
                <h3>
                  {report.waveHeight.min} - {report.waveHeight.max}ft
                </h3>
              </ReportNode>
              <ReportNode>
                <h5>Weather</h5>
                <img src={weather} alt="" />
                <h3>{report.weather.temperature}&#176;</h3>
              </ReportNode>
              <ReportNode>
                <h5>Water Temp</h5>
                <img src={temperature} alt="" />
                <h3>
                  {report.waterTemp.min}-{report.waterTemp.max}&#176;
                </h3>
              </ReportNode>
            </ReportNodes>
          </SurfReport>
        </Section>
      </HeroText>
    </HeroWrapper>
  </>
);

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  const meta = data.site.siteMetadata;
  const report = data.allSurfReport.edges[0].node.forecast;
  console.log(report);
  if (!doc) return null;

  return (
    <Layout>
      <RenderBody home={doc.node} meta={meta} report={report} />
    </Layout>
  );
};

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  report: PropTypes.object.isRequired,
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
    allSurfReport {
      nodes {
        id
      }
      edges {
        node {
          forecast {
            waterTemp {
              min
              max
            }
            waveHeight {
              min
              max
            }
            weather {
              temperature
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
