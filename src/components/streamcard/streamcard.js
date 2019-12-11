import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

export default function Streamcard (props) {
    return (
        <Grid container md={12} style={{marginBottom:20}}>
          <Grid container md={12} style={{ width:328, height:90, backgroundColor:"#D7EFEE"}}>
            <Grid item md={8}>
              <p style={{marginTop:15, marginLeft:20, fontSize: 24}}>New from your network</p>
            </Grid>
            <Grid item md={4}>
              <img src="https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png" alt="" style={{width:80, marginTop:10}}/>
            </Grid>
          </Grid>

          <Grid container md={12} style={{width:264, height:380, backgroundColor:"#fafafa"}}>
            <Grid item md={4}>
              <Grid container md={12}>
                <Grid item md={12} style={{marginTop:45, marginLeft:30}}>
                  <a href="/">
                    <Avatar alt="Remy Sharp" src="https://cdn-images-1.medium.com/fit/c/40/40/2*D4KAER7h6bCkTU-m7Aw9DA.jpeg"></Avatar>
                  </a>
                </Grid>
                <Grid item md={12} style={{marginTop:45, marginLeft:30}}>                  
                  <a href="/">
                    <Avatar alt="Remy Sharp" src="https://cdn-images-1.medium.com/fit/c/40/40/1*Dssy7DsMuw7Xqa5m8HUE3A.jpeg"></Avatar>
                  </a>
                </Grid>
                <Grid item md={12} style={{marginTop:45, marginLeft:30}}>                
                  <a href="/">
                    <Avatar alt="Remy Sharp" src="https://cdn-images-1.medium.com/fit/c/40/40/2*0_tawM2gxVFPmHD3nUom_g.jpeg"></Avatar>
                  </a>
                </Grid>
                <Grid item md={12} style={{marginTop:45, marginLeft:30}}>
                  <a href="/">
                    <Avatar alt="Remy Sharp" src="https://cdn-images-1.medium.com/fit/c/40/40/0*RP2QPmyIKql6SoLm."></Avatar>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid container md={8}>
              <Grid container md={12}>
                <Grid item md={12}>
                  <p style={{marginTop:45,marginBottom:0,fontWeight:500, color:"black"}}>How to Spot Con Artist</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:15, fontWeight:300, color:"black"}}>Tim denning in The Startup</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:13, fontWeight:300}}>half an hour ago | 5 Min Read</p>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={12}>
                  <p style={{marginTop:0,marginBottom:0,fontWeight:500, color:"black"}}>How to Spot Con Artist</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:15, fontWeight:300, color:"black"}}>Tim denning in The Startup</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:13, fontWeight:300}}>half an hour ago | 5 Min Read</p>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={12}>
                  <p style={{marginTop:0,marginBottom:0,fontWeight:500, color:"black"}}>How to Spot Con Artist</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:15, fontWeight:300, color:"black"}}>Tim denning in The Startup</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:13, fontWeight:300}}>half an hour ago | 5 Min Read</p>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={12}>
                  <p style={{marginTop:0,marginBottom:0,fontWeight:500, color:"black"}}>How to Spot Con Artist</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:15, fontWeight:300, color:"black"}}>Tim denning in The Startup</p>
                  <p style={{marginTop:5,marginBottom:0, fontSize:13, fontWeight:300}}>half an hour ago | 5 Min Read</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}