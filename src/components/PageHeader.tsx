import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import TextSpan from './TextSpan';
import { ProgramTemplateQuery, ArtistTemplateQuery } from '../../graphql-types';

interface StylesProps {
  image?: string | null;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: 200,
      padding: theme.spacing(2, 0),
      background: theme.palette.background.paper,
    },
    left: {
      width: '50%',
      maxWidth: 280,
      padding: theme.spacing(0, 1),
      display: 'flex',
      flexShrink: 0,
    },
    image: {
      backgroundColor: theme.palette.grey[700],
      backgroundImage: ({ image }) => (image ? `url(${image})` : undefined),
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      flexGrow: 1,
    },
    right: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(0, 1),
      justifyContent: 'space-between',
    },
  })
);

interface Props {
  image?: string | null;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

function PageHeader({ image, top, bottom }: Props) {
  const classes = useStyles({ image });
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.image} />
      </div>
      <div className={classes.right}>
        <div>{top}</div>
        <div>{bottom}</div>
      </div>
    </div>
  );
}

export function ProgramPageHeader({ program }: { program: ProgramTemplateQuery['program'] }) {
  return (
    <PageHeader
      image={program?.fields?.image}
      top={
        <>
          <Typography variant="body2" color="textSecondary">
            <TextSpan>{`第${program?.week}回`}</TextSpan>
            <TextSpan>{program?.date}</TextSpan>
            <TextSpan>全{program?.playlist?.length}曲</TextSpan>
          </Typography>
          <Typography variant="h6" component="h2">
            {program?.title}
          </Typography>
          {program?.subtitle ? <Typography>{program.subtitle}</Typography> : null}
        </>
      }
      bottom={
        <>
          <Typography variant="body2">
            {program?.categories?.map((category) => (
              <TextSpan>
                <AppLink to="/categories" state={{ category: category ?? undefined }}>
                  {category}
                </AppLink>
              </TextSpan>
            ))}
          </Typography>
        </>
      }
    />
  );
}

export function ArtistPageHeader({ artist }: { artist: ArtistTemplateQuery['artist'] }) {
  return (
    <PageHeader
      image={artist?.image}
      top={
        <>
          <Typography variant="h6" component="h2">
            {artist?.name}
          </Typography>
          <Typography variant="body2">{artist?.nation}</Typography>
        </>
      }
      bottom={
        <>
          <Typography variant="caption">{artist?.programCount}回</Typography>
          <Typography variant="caption">{artist?.tunesCount}曲</Typography>
        </>
      }
    />
  );
}

export default PageHeader;
