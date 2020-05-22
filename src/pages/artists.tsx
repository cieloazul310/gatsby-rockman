import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterIcon from '@material-ui/icons/Filter';
import { AutoSizer } from 'react-virtualized';
import Layout from 'gatsby-theme-aoi/src/layout';
import Artists from '../components/Artists';
import useWindowSize from '../utils/useWindowSize';
import { ArtistItem } from '../utils/graphql-hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBox: {
      padding: `0 ${theme.spacing(2)}px`,
      display: 'flex',
    },
    searchText: {
      flex: 1,
    },
  })
);

function ArtistsPage() {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState('');

  const filter = React.useMemo(() => {
    if (searchText === '') {
      return () => true;
    } else {
      const regex = RegExp(`${searchText}`, 'i');
      return (artist: ArtistItem) => regex.test(artist.fieldValue) || regex.test(artist.kana);
    }
  }, [searchText]);
  const _onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };
  const _clearSearchText = () => {
    setSearchText('');
  };
  const windowHeight = useWindowSize().height;

  return (
    <Layout
      title="アーティスト一覧"
      maxWidth="md"
      bottomNavigation={
        <Box position="fixed" bottom={0} left={0} width="100%" p={1}>
          <Paper className={classes.searchBox}>
            <IconButton onClick={_clearSearchText}>
              <FilterIcon />
            </IconButton>
            <InputBase
              value={searchText}
              onChange={_onChangeSearchText}
              className={classes.searchText}
              placeholder="アーティストを検索"
              inputProps={{ 'aria-label': 'search artists' }}
            />
            <IconButton onClick={_clearSearchText}>
              <CancelIcon />
            </IconButton>
          </Paper>
        </Box>
      }
    >
      <Box pb={2}>
        <Typography variant="h5" component="h2">
          アーティスト一覧
        </Typography>
      </Box>
      <Box>
        <Paper component="form" className={classes.searchBox}>
          <IconButton onClick={_clearSearchText}>
            <FilterIcon />
          </IconButton>
          <InputBase
            value={searchText}
            onChange={_onChangeSearchText}
            className={classes.searchText}
            placeholder="アーティストを検索"
            inputProps={{ 'aria-label': 'search artists' }}
          />
          <IconButton onClick={_clearSearchText}>
            <CancelIcon />
          </IconButton>
        </Paper>
      </Box>
      <Container maxWidth="sm" disableGutters>
        <Box py={2}>
          <AutoSizer disableHeight defaultHeight={windowHeight ? windowHeight - 240 : 400}>
            {({ width, height }) => <Artists width={width} height={height} filter={filter} />}
          </AutoSizer>
        </Box>
      </Container>
    </Layout>
  );
}

export default ArtistsPage;
