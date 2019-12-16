import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Nav from "../../components/navbar/navbar"
import { Container } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
     <div className={classes.root}>
         <Nav/>
          <Container>

        <div style={{display: "flex"}}>
        <h1 style={{marginRight: "auto"}}>Stats</h1>
       
      </div>
      <div style={{display: "flex"}}>
          <p style={{marginRight: "auto"}}>Click story below to view in chart</p>
          <p>Learn more about using stats</p>
      </div>
      <hr/>
      
      <AppBar position="static" style={{backgroundColor: "white", color: "black", boxShadow: "0 0 0 0"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{fontSize: 50, fontWeight :"bold"}} label="0" {...a11yProps(0)} />
          <Tab label="Published" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
    sdhkjshdskg
      </TabPanel>
      <TabPanel value={value} index={1}>
          You havent"t published any public stories ye.
      </TabPanel>
  
         </Container>
        
         
    </div>
  
  );
}