import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import ReservedTable  from '@material-ui/icons/BorderClear';
import EmptyTable  from '@material-ui/icons/BorderStyle';
import OccupiedTable from '@material-ui/icons/BorderOuter';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Legends from './components/Legends';
import Upcoming from './components/Upcoming';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
      textAlign: 'center',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    card:{
      minWidth: 275,
      color: 'white',
    }
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // drop down
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'breakfast',
  });
  const handleChangePlaceholder = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log(event.target.value);
  };
  // end drop down

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Restaruant
          </Typography>
          <Button variant="contained">
            <a href="/reservation">Reservation</a>
          </Button>
        </Toolbar>
      </AppBar>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" {...a11yProps(0)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h3>Date & time of Reservation</h3>        
              <Route path='/reservation' component={Reservation}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h4>Current Reservations</h4>  
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    className={classes.selectEmpty}
                    value={state.age}
                    name="age"
                    onChange={handleChangePlaceholder}
                    inputProps={{ 'aria-label': 'age' }}
                  >
                    <option value="" disabled>
                      Meal
                    </option>
                    <option value={"Breakfast"}>Breakfast</option>
                    <option value={"Lunch"}>Lunch</option>
                    <option value={"Dinner"}>Dinner</option>
                  </NativeSelect>
                </FormControl>
                </Grid> 
                <Grid item xs={6}>
                  <h4>Find Reservation Date</h4>
                  <TextField
                    id="date"
                    label="Find Reservation Date"
                    type="date"
                    defaultValue="2021-03-11"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid> 
              </Grid>
            </Paper>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h4>Legends</h4>
              <Legends/>                
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Upcoming/>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "darkGreen"}}>
                          <Avatar >
                            <EmptyTable /> 
                          </Avatar>
                          Empty Table 
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "darkGreen"}}>
                          <Avatar>
                            <EmptyTable /> 
                          </Avatar>
                          Empty Table 
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "darkGreen"}}>
                          <Avatar>
                            <EmptyTable />
                          </Avatar>
                          Empty Table 
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "teal", textEmphasisColor:"white"}}>
                          <Avatar>
                            <ReservedTable />
                          </Avatar>
                          Reserved Table 
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "red"}}>
                          <Avatar>
                            <OccupiedTable /> 
                          </Avatar>
                          Occupied Table 
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "darkGreen"}}>
                          <Avatar>
                            <EmptyTable />
                          </Avatar>
                          Empty Table 
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card className={classes.card}>
                      <CardContent style={{backgroundColor: "teal", textEmphasisColor:"white"}}>
                          <Avatar>
                            <ReservedTable />
                          </Avatar>
                          Reserved Table 
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
      </TabPanel>
      <Footer/>
    </div>
    </Router>
  );
}
