import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Nav from "../../components/navbar/navbar"

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
          <Container>
              <Nav/>
          </Container>
          <Container maxWidth="md" style={{marginTop: 20}}>
              
            <div style={{display: "flex"}}>
            <div style={{textAlign: "left"}}>
                <h1>farizi hamzah</h1>
                <p>403750</p>
            
            </div>
            <div style={{marginRight: "auto", marginLeft: 20}}>
                    <Button variant="outlined">Edit profile</Button>
            </div>
            <Avatar style={{width: 150, height: 150}} alt="Remy Sharp" src="https://miro.medium.com/fit/c/256/256/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg" />
        </div>
      
        <AppBar style={{boxShadow: "none", borderBottom: "1px solid Gray"}} position="static">
          <Tabs style={{backgroundColor: "white", color: "black", padding: "none" }} value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Claps" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div style={{display: "flex", fontSize :25, fontWeight: "bold"}}>
              <p>Claps from farizi hamzah</p>
              <p style={{marginLeft: "auto", fontSize: 20, fontWeight: "none"
            }}>
                  See more
              </p>
          </div>
          <div style={{display: "flex"}}>
              <div style={{border: "0px solid gray", width: "100%", padding: 20, borderRadius: 5,boxShadow: "1px 1px 3px 1px #808080"}}>

              <p style={{fontSize :20, fontWeight: "bold", textAlign: "left",  }}>Extinction, Evolution, and Event Horizons</p>
              <p style={{textAlign: "left", marginTop: -12}}>Chad Grills</p>
              <hr/>
              <p style={{fontSize :20, fontWeight: "bold", textAlign: "left",  }}>Extinction, Evolution, and Event Horizons</p>
              <p style={{textAlign: "left", marginTop: -12}}>Chad Grills</p>
              
              </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
       
          </Container>
          
      </div>
    );
  }