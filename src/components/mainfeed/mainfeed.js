import React from 'react'
import './mainfeed.css'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Mainfeed() {
  return(
    <Grid container md={12} style={{marginBottom:20}}>
      <Grid container md={9}>
        <Grid item md={12}>
          <p style={{marginTop: 5, marginBottom: 0, fontSize:15, fontWeight:400}}>POPULAR ON MEDIUM</p>
          <p style={{marginTop: 0, marginBottom: 10, fontSize:23, fontWeight:500, color:"black"}}>Startup Books you should read in 2019</p>
          <p style={{marginTop: 0, marginBottom: 10, fontSize:15, fontWeight:300}}>How to grow a start-up? Read daily!</p>
        </Grid>
        <Grid container md={12}>
          <Grid item>
            <p style={{marginTop: 0, marginBottom: 5, fontSize:12, fontWeight:400, color:"black"}}>Przemek Chojecki in Towards Data Sience</p>
            <p style={{marginTop: 0, marginBottom: 0, fontSize:12, fontWeight:300}}>Nov 20 | 4 Min read</p>
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
        <img src="https://cdn-images-1.medium.com/fit/c/152/156/1*Jg1oYMG_dN2MxbBzlgo0Xg.jpeg" alt="" style={{maxHeight:200}}/>
      </Grid>
    </Grid>
  )
}