import * as React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import ListItemAppLink from 'gatsby-theme-aoi/src/components/ListItemAppLink';
import NationAvatar from './NationAvatar';
import { useAllArtists } from '../utils/graphql-hooks';
import { getYomi } from '../utils/sortByYomi';
import { ArtistItem } from '../types';

function renderRow({ index, style, data }: ListChildComponentProps) {
  const artist: ArtistItem = data[index];
  return (
    <ListItemAppLink
      button
      style={style}
      key={index}
      to={
        artist[3].length > 1
          ? `/artist/${artist[0]}/`
          : `/artist/?name=${artist[0]}`
      }
    >
      <ListItemAvatar>
        <NationAvatar nation={artist[2]} />
      </ListItemAvatar>
      <ListItemText primary={artist[0]} secondary={artist[1] || null} />
      <Chip label={artist[3].length} />
    </ListItemAppLink>
  );
}

interface Props {
  width?: number;
  height?: number;
  itemSize?: number;
  filter?: (artist: ArtistItem) => boolean;
  sort?: (a: ArtistItem, b: ArtistItem) => number;
}

function Artists({
  width = 320,
  height = 480,
  itemSize = 60,
  filter = () => true,
  sort = (a, b) => b[3].length - a[3].length,
}: Props) {
  const allArtists = useAllArtists();
  const artists = React.useMemo(
    () =>
      allArtists
        .filter(filter)
        .sort(
          (a, b) =>
            sort(a, b) || getYomi(a[0], a[1]).localeCompare(getYomi(b[0], b[1]))
        ),
    [allArtists, filter, sort]
  );

  return (
    <FixedSizeList
      width={width}
      height={height}
      itemCount={artists.length}
      itemSize={itemSize}
      itemData={artists}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default Artists;