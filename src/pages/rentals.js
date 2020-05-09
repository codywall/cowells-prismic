import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import RentalItem from '../components/RentalItem';
import Intro from '../components/Intro'
import Card from '../components/Card'
import skateboards from '../images/skateboards.jpg'
import CardWrapper from '../components/CardWrapper'

const rentalTypes = [
  {
    title: `Beginner Surfboards`,
    text: `Soft boards are the easiest and 
  safest surfboards to learn on. Everyone starts on one of these.`,
    image: {
      url: skateboards,
      alt: 'skateboards'
    }
  },
  {
    title: `High Performance Boards`,
    text: `We have a large selection of epoxy and fiberglass shortboards
     and longboards for advanced surfers.`,
    image: {
      url: skateboards,
      alt: 'skateboards'
    }
  },
  {
    title: `Standup Paddleboards`,
    text: `Standup paddleboards are great exercise and an awesome way to 
    explore the Monterey Bay.`,
    image: {
      url: skateboards,
      alt: 'skateboards'
    }
  },
  {
    title: `Wetsuits`,
    text: `The water is cold out there, so you’ll need a wetsuit to keep warm.
     We’ve got you covered, no matter what size you are.`,
    image: {
      url: skateboards,
      alt: 'skateboards'
    }
  },
  {
    title: `Boogieboards & Skimboards`,
    text: `When the waves are flat or you just want to have fun near the sand,
     playing around on one of these is always a great time.`,
    image: {
      url: skateboards,
      alt: 'skateboards'
    }
  },
  {
    title: `Beach Equipment`,
    text: `We have beach chairs, volleyballs, umbrellas, and more available for daily rental.`,
    image: {
      url: skateboards,
      alt: 'skateboards'
    }
  }
];

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
      <Intro title="Rentals"
        text="We have a large selection of rentals available for daily rental.
             From beginner boards to high performance shortboards, we have
             something for everyone." />
      <CardWrapper>
        {rentalTypes.map((rentalTypes, i) => (
          <Card
            title={<h4>{rentalTypes.title}</h4>}
            text={<p>{rentalTypes.text}</p>}
            image={rentalTypes.image}
            key={i}
          />
          ))}
      </CardWrapper>
      
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
