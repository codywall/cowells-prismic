import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import RentalItem from '../components/RentalItem';

const RentalTitle = styled('h1')`
  margin-bottom: 1em;
`;

const Rentals = ({ rentals, meta }) => (
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
      <RentalTitle>Rentals</RentalTitle>
      <>
        {rentals.map((rental, i) => (
          <RentalItem
            name={rental.item_name}
            price={rental.item_price}
            icon={rental.item_icon}
            key={i}
          />
        ))}
      </>
    </Layout>
  </>
);

export default ({ data }) => {
  const rentals = data.prismic.allRentalss.edges[0].node.item;
  console.log(rentals);
  const meta = data.site.siteMetadata;
  if (!rentals) return null;

  return <Rentals meta={meta} rentals={rentals} />;
};

Rentals.propTypes = {
  rentals: PropTypes.array.isRequired,
};

export const query = graphql`
  {
    prismic {
      allRentalss {
        edges {
          node {
            item {
              item_icon
              item_name
              item_price
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
