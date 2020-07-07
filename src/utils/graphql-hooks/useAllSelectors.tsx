import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AllSelectorsQuery, Program, ProgramPlaylist } from '../../../graphql-types';

export interface CategoryItem {
  fieldValue: string;
  edges: Edge[];
  playlist: Playlist[];
}

export function useAllSelectors(): CategoryItem[] {
  const data = useStaticQuery<AllSelectorsQuery>(graphql`
    query AllSelectors {
      allProgram {
        group(field: playlist___selector) {
          fieldValue
          edges {
            node {
              id
              week
              date(formatString: "YYYY-MM-DD")
              title
              fields {
                slug
              }
              playlist {
                id
                indexInWeek
                title
                artist
                year
                nation
                selector
                youtube
                corner
              }
            }
          }
        }
      }
    }
  `);

  return React.useMemo(() => {
    return data.allProgram.group
      .filter((group) => group.fieldValue !== '草野マサムネ')
      .map((group) => {
        const edges = removeMultiple(group.edges as Edge[]);
        return {
          fieldValue: group.fieldValue ?? 'selector',
          edges,
          playlist: edges.reduce<Playlist[]>(
            (accum, curr) =>
              curr.node.playlist ? [...accum, ...curr.node.playlist.filter((tune) => tune.selector === group.fieldValue)] : [...accum],
            []
          ),
        };
      })
      .sort((a, b) => b.playlist.length - a.playlist.length || b.edges.length - a.edges.length);
  }, [data]);
}

type Edge = {
  node: Pick<Program, 'id' | 'week' | 'date' | 'title' | 'fields'> & {
    playlist?: Playlist[];
  };
};
type Playlist = Pick<ProgramPlaylist, 'id' | 'title' | 'artist' | 'year' | 'selector' | 'youtube'>[];

function removeMultiple(edges: Edge[]): Edge[] {
  return edges.reduce<Edge[]>((accum, curr) => {
    if (accum.map((d) => d.node.id).indexOf(curr.node.id) >= 0) return accum;
    return [...accum, curr];
  }, []);
}
