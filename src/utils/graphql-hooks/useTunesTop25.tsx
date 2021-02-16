import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TunesCountQuery } from '../../../graphql-types';

export function useTunesTop25() {
  const data = useStaticQuery<TunesCountQuery>(graphql`
    query TunesCount {
      allArtist(sort: { fields: tunesCount, order: DESC }, limit: 25, filter: { name: { ne: "スピッツ" } }) {
        edges {
          node {
            id
            image
            kana
            name
            nation
            programCount
            tunesCount
          }
        }
      }
    }
  `);
  return React.useMemo(() => data.allArtist.edges, [data]);
}
