import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BorderClear from '@material-ui/icons/BorderClear';
import BorderStyle from '@material-ui/icons/BorderStyle';
import BorderOuter from '@material-ui/icons/BorderOuter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Legends = () => {       
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BorderStyle />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Empty Table" secondary="Empty Reservation" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BorderClear />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Reserved Table" secondary="Table Already Reserved" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BorderOuter />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Occupied Table" secondary="Meal Served at Reserved Table" />
      </ListItem>
    </List>
  );
}
export default Legends