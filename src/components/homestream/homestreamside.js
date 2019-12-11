import React from 'react'
import './homestreamside.css'
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

export default function HomeStreamSide(props) {
  const classes = useStyles();
  return(
    <div>
      <Grid container className={classes.root} spacing={0}>
        <Grid item md={12} style={{height:150, marginBottom:16, backgroundOrigin:'border-box', backgroundSize:'cover',display:'block'}}>
          <a href={props.SideUrl}>
            <img src={ props.SideImage} style={{width: 323,height:150}} alt="" />
          </a>
        </Grid>
        <Grid item md={9} style={{ width:264, height:169}}>
          <Grid item md={12} style={{height: 48}}>
            <p style={{marginTop:0, marginBottom:0, color:"black", fontWeight:500, fontSize:17}}>
              { props.SideTitle}
            </p>
          </Grid>
          <Grid item md={12} style={{height:26}}>
            <p style={{marginTop:0, marginBottom:0, color:"gray", fontWeight:400, fontSize:12}}>
              { props.SideDescription}
            </p>
          </Grid>
          <Grid item md={12} style={{height:21}}>
            <p style={{marginTop:0, marginBottom:0, color:"black", fontWeight:500, fontSize:12}}>
              { props.SideWriter}
            </p>
          </Grid>
          <Grid item md={12} style={{height:20}}>
            <p style={{marginTop:0, marginBottom:0, color:"gray", fontWeight:400, fontSize:12}}>
              { props.SideDate} | { props.SideTimeReading} Min Read
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}