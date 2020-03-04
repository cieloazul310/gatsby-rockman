import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-typescript-material-ui/src/layout';
import SimpleNationBar from '../components/SimpleNationBar';
import SimpleYearsBar from '../components/SimpleYearsBar';
import { AllDataQuery } from '../../graphql-types';

function SecondPage() {
  const data = useStaticQuery<AllDataQuery>(graphql`
    query AllData {
      allYaml(sort: { fields: week, order: ASC }) {
        edges {
          node {
            id
            title
            date
            categories
            fields {
              slug
            }
            guests
            playlist {
              artist
              corner
              id
              indexInWeek
              index
              kana
              label
              name
              nation
              producer
              selector
              title
              week
              year
              youtube
            }
            subtitle
            week
            year
          }
          next {
            title
            fields {
              slug
            }
            week
          }
          previous {
            fields {
              slug
            }
            title
            week
          }
        }
      }
    }
  `);
  const categories = React.useMemo(
    () =>
      data.allYaml.edges
        .map(({ node }) => node.categories)
        .reduce((accum, curr) => [...accum, ...curr], [])
        .reduce((accum, curr) => {
          const existedIndex = accum.map(d => d[0]).indexOf(curr);
          if (existedIndex < 0) {
            return [...accum, [curr, 1]];
          } else {
            accum[existedIndex][1] += 1;
            return accum;
          }
        }, [])
        .sort((a, b) => b[1] - a[1]),
    [data]
  );
  console.log(categories);

  const guests = React.useMemo(
    () =>
      data.allYaml.edges
        .map(({ node }) => node.guests)
        .reduce((accum, curr) => [...accum, ...curr], [])
        .reduce((accum, curr) => {
          const existedIndex = accum.map(d => d[0]).indexOf(curr);
          if (existedIndex < 0) {
            return [...accum, [curr, 1]];
          } else {
            accum[existedIndex][1] += 1;
            return accum;
          }
        }, [])
        .sort((a, b) => b[1] - a[1]),
    [data]
  );
  console.log(guests);

  const allTunes = React.useMemo(
    () =>
      data.allYaml.edges
        .map(({ node }) => node.playlist)
        .reduce((accum, curr) => [...accum, ...curr]),
    [data]
  );
  const artists = React.useMemo(
    () =>
      allTunes
        .reduce((accum, curr) => {
          const existedIndex = accum.map(d => d[0]).indexOf(curr.artist);
          if (existedIndex < 0) {
            return [...accum, [curr.artist, 1]];
          } else {
            accum[existedIndex][1] += 1;
            return accum;
          }
        }, [])
        .sort((a, b) => b[1] - a[1]),
    [allTunes]
  );
  const selectors = React.useMemo(
    () =>
      allTunes
        .map(d => d.selector)
        .reduce((accum, curr) => {
          const existedIndex = accum.map(d => d[0]).indexOf(curr);
          if (existedIndex < 0) {
            return [...accum, [curr, 1]];
          } else {
            accum[existedIndex][1] += 1;
            return accum;
          }
        }, [])
        .sort((a, b) => b[1] - a[1]),
    [allTunes]
  );

  console.log(artists);

  return (
    <Layout title="Second Page">
      <Typography variant="h5" component="h3">
        Summary
      </Typography>
      <SimpleNationBar playlist={allTunes} />
      <SimpleYearsBar playlist={allTunes} />
      <Typography variant="h5" component="h3">
        カテゴリー
      </Typography>
      <div>
        {categories.map(d => (
          <Typography key={d[0]} variant="body1">
            {d[0]} {d[1]}
          </Typography>
        ))}
      </div>
      <Typography variant="h5" component="h3">
        ゲスト
      </Typography>
      <div>
        {guests.map(d => (
          <Typography key={d[0]} variant="body1">
            {d[0]} {d[1]}
          </Typography>
        ))}
      </div>
      <Typography variant="h5" component="h3">
        選曲者
      </Typography>
      <div>
        {selectors.map(d => (
          <Typography key={d[0]} variant="body1">
            {d[0]} {d[1]}
          </Typography>
        ))}
      </div>
      <Typography variant="h5" component="h3">
        アーティスト
      </Typography>
      <div>
        {artists.map(d => (
          <Typography key={d[0]} variant="body1">
            {d[0]} {d[1]}
          </Typography>
        ))}
      </div>
    </Layout>
  );
}

export default SecondPage;
