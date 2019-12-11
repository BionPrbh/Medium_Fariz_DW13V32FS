import React from 'react'
import './mainfeed.css'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Mainfeed(props) {
  return(
    <Grid container md={12} style={{marginBottom:40}}>
      <Grid container md={9}>
        <Grid item md={12}>
          <p style={{marginTop: 5, marginBottom: 0, fontSize:15, fontWeight:400}}>{props.Category}</p>
          <p style={{marginTop: 0, marginBottom: 10, fontSize:23, fontWeight:500, color:"black"}}>{props.Title}</p>
          <p style={{marginTop: 0, marginBottom: 10, fontSize:15, fontWeight:300}}>{props.Description}</p>
        </Grid>
        <Grid container md={12}>
          <Grid item>
            <p style={{marginTop: 0, marginBottom: 5, fontSize:12, fontWeight:400, color:"black"}}>{props.Writer} in {props.Publisher}</p>
            <p style={{marginTop: 0, marginBottom: 0, fontSize:12, fontWeight:300}}>{props.Date} | {props.Minute}</p>
          </Grid>
          <Grid item style={{paddingLeft:110}}>
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container md={3}>
        <img src={props.MainFeedImage} alt="" style={{maxHeight:170, maxWidth:200}}/>
      </Grid>
    </Grid>
  )
}