import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function CPHQuote(props) {
  return(
    <Grid container sm={12} style={{backgroundColor:props.quoteBgColor,width:1192, height: 300, marginBottom:40}}>
      <Grid item sm={9} style={{paddingLeft:200}}>
        <p style={{fontSize:30, fontWeight:500, marginBottom:"", marginTop:50}}>
          "{props.quoteTitle}"
        </p>
        <p style={{fontSize:15, fontWeight:500, marginBottom:"", marginTop:""}}>
          {props.quoteWriter}
        </p>
        <p style={{fontSize:18, fontWeight:400, marginBottom:"", marginTop:""}}>
          {props.quoteBrief}
        </p>
        <p style={{fontSize:15, fontWeight:400, marginBottom:"", marginTop:""}}>
          {props.quoteDate} | {props.ReadingTime}
        </p>
      </Grid>
    </Grid>
  )
}
