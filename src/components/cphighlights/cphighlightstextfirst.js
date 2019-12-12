import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

export default function Cphighlights(props) {
  return(
    <Grid container sm={12} style={{backgroundColor:"red",width:1192, height: 354, marginBottom:40}}>
      <Grid item sm={4} style={{backgroundColor:props.CPHBGColor}}>
        <p style={{fontSize:30, color:props.ArticleFontColor, fontWeight:500,textAlign:"center", marginBottom:0, paddingTop:30}}>
          {props.CPHTitle}
        </p>
        <p style={{fontSize:18, color:props.ArticleFontColor,fontWeight:400, textAlign:"center", marginTop:10}}>
          {props.CPHDescription}
        </p>
        <p style={{fontSize:15, color:props.WriterFontColor,fontWeight:400, textAlign:"center",paddingTop:10, marginBottom:5}}>
          {props.CPHWriter}
        </p>
        <p style={{fontSize:15, color:props.ArticleFontColor,fontWeight:400, textAlign:"center",marginTop:0}}>
          {props.CPHDate} | {props.CPHReadingTime}
        </p>
      </Grid>
      <Grid item sm={8} style={{backgroundColor:"teal",}}>
        <CardMedia 
          component="img"
          image={props.CPHimage}
          height={props.CPHimageHeight}
        />
      </Grid>
    </Grid>
  )
}