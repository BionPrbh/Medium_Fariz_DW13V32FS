import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from '@material-ui/core/Button';

import Nav from "../navbar/navbar"

class Newstory extends Component{
    render(){
        return(
            <>
            <Container>
                <Nav/>
            </Container>
             <Container fixed style={{ marginTop: 100 }}>
         <div style={{display: "flex"}}>
             <h1>
                 Bookmark
             </h1>
         </div>
         <div style={{display: "flex", border: "1px solid black", borderRadius: 5}}>
             <BookmarkIcon style={{fontSize: 50}}/>
             <div style={{width: 1,height: 70, backgroundColor: "gray",marginRight : 2, marginTop: "auto"}}/>
             <h1 style={{fontFamily: "mono", fontSize: 35, fontWeight : "bold", marginTop: "auto", marginBottom: "auto"}}>Offline reding is here.</h1>
             <Button style={{marginLeft :"auto", height :40, marginTop: "auto", marginBottom :"auto", marginRight : 10, backgroundColor : "Black"}} variant="contained" color="primary">Upgrade</Button>
         </div>
        </Container>
            </>
        )
    }
}

export default Newstory;