import React from 'react'
import './cpcontent.css'
import Grid from '@material-ui/core/Grid'

export default function Cpcontent(props){
  return(
    <Grid container style={{marginBottom:50, marginTop:30, width:700, height:180}}>
      <Grid item md={9}>
          <p style={{marginTop: 0, marginBottom: 0, fontSize:23, fontWeight:500, color:"black", height:60}}>{props.Title}</p>
          <p style={{marginTop: 0, marginBottom: 0, fontSize:15, fontWeight:300,height:60}}>{props.Description}</p>
          <p style={{marginTop: 0, marginBottom: 0, fontSize:12, fontWeight:400, color:"black"}}>{props.Writer} in {props.Publisher}</p>
          <p style={{marginTop: 0, marginBottom: 0, fontSize:12, fontWeight:300}}>{props.Date} | {props.ReadingTime}</p>
      </Grid>
      <Grid container md={3}>
        <img src={props.CPFeedImage} alt="" style={{maxHeight:150, maxWidth:300}}/>
      </Grid>
    </Grid>
  )
}