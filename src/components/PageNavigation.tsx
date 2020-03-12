import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
  })
);

interface NavigationProps {
  to: string;
  label: string;
}

interface Props {
  prev?: NavigationProps;
  next?: NavigationProps;
}

function PageNavigation({ prev, next }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {prev ? (
        <Box py={1} pr={1} textAlign="left">
          <Button component={GatsbyLink} variant="outlined" to={prev.to}>
            <ArrowBackIcon />
            {prev.label}
          </Button>
        </Box>
      ) : null}
      {next ? (
        <Box py={1} pl={1} textAlign="right">
          <Button component={GatsbyLink} variant="outlined" to={next.to}>
            {next.label}
            <ArrowForwardIcon />
          </Button>
        </Box>
      ) : null}
    </Box>
  );
}

export default PageNavigation;

export function PageNavigationSkeleton() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box p={1} textAlign="left">
        <Button variant="outlined">
          <Skeleton variant="circle" width={24} height={24} />
          <Skeleton variant="text" width={120} />
        </Button>
      </Box>
      <Box p={1} textAlign="right">
        <Button variant="outlined">
          <Skeleton variant="text" width={120} />
          <Skeleton variant="circle" width={24} height={24} />
        </Button>
      </Box>
    </Box>
  );
}
