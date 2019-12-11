import React from 'react'
import './homestreamfeeder.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function HomeStreamFeeder(props) {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  // const handleChange = event => {
  //   setSpacing(Number(event.target.value));
  // };
  return (
    <div>
      <Grid container className={classes.root} spacing={0}>
        <Grid item md={4} style={{width:100, height:100}}>
          <a href={props.FeederUrl}>
            <img src={ props.FeederImage} alt="" />
          </a>
        </Grid>
        <Grid item md={8} style={{backgroundColor:"transparent", width:265, height:100}}>
          <Grid item md={12} style={{backgroundColor:"transparent", width:265, height:44}}>
            <p style={{marginTop:0, marginBottom:0, color:"black", fontWeight:500, fontSize:15}}>
              { props.FeederTitle}
            </p>
          </Grid>
          <Grid item md={12} style={{backgroundColor:"transparent", width:265, height:41, marginTop:15}}>
            <p style={{marginTop:0, marginBottom:0, color:"black",fontWeight:400, fontSize:12}}>
              { props.FeederWriter}
            </p>
            <p style={{marginTop:8, marginBottom:0, color:"gray", fontWeight:400, fontSize:12}}>
              { props.FeederDate} | { props.FeederTimeReading} Min Read
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}