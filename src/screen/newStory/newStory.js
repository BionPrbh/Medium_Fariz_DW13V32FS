import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import InputBase from "@material-ui/core/InputBase";
import Nav from "../../components/navbar/navbar"

class Newstory extends Component{
    render(){
        return(
            <>
            <Container>
                <Nav/>
            </Container>
             <Container maxWidth="md" style={{ marginTop: 100 }}>
          <form noValidate autoComplete="off"></form>
          <div style={{ display: "flex" }}>
            <AddCircleOutlineOutlinedIcon
              style={{ color: "gray", fontSize: 40, marginTop: "auto" }}
            />
            <div
              style={{
                width: 1,
                height: 70,
                backgroundColor: "gray",
                marginRight: 10,
                marginTop: "auto"
              }}
            />
            <InputBase
              style={{ fontSize: 40, fontFamily: "mono", width: "100%" }}
              label="Filled secondary"
              inputProps={{ "aria-label": "naked" }}
            />
          </div>
        </Container>
            </>
        )
    }
}

export default Newstory;