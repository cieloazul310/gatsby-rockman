import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import getNationColor from '../utils/getNationColor';

interface StyleProps {
  nation: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    nation: ({ nation }) => ({
      backgroundColor: getNationColor(nation, theme.palette.type === 'dark'),
      color: theme.palette.getContrastText(getNationColor(nation, theme.palette.type === 'dark')),
    }),
  })
);

interface Props {
  nation: string;
}

function NationAvatar({ nation }: Props) {
  const classes = useStyles({ nation });
  return (
    <Avatar className={classes.nation} aria-label="region">
      {nation}
    </Avatar>
  );
}

export default NationAvatar;
