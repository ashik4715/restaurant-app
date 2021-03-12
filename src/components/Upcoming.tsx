import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Restaurant from '@material-ui/icons/Restaurant';
import RestaurantMenuOutlined from '@material-ui/icons/RestaurantMenuOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Upcoming = () => {       
  const classes = useStyles();

  return (
    <List className={classes.root}>     
      <b>Upcoming Reservation</b> 
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Restaurant />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Reservation One" secondary="March 11, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <RestaurantMenuOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Reservation Two" secondary="March 12, 2021" />
      </ListItem>
    </List>
  );
}
export default Upcoming