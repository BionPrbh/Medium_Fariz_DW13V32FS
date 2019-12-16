import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Nav from "../navbar/navbar";

class Profile extends Component {
  render() {
    return (
      <>
        <Container>
          <Nav />
        </Container>
        <Container maxWidth="md" style={{ marginTop: 100 }}>
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left" }}>
              <h1>farizi hamzah</h1>
              <p>32956 Following</p>
            </div>
            <div style={{ marginRight: "auto", marginLeft: 20 }}>
              <Button variant="outlined">Edit profile</Button>
            </div>
            <Avatar
              style={{ width: 150, height: 150 }}
              alt="Remy Sharp"
              src="https://miro.medium.com/fit/c/256/256/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg"
            />
          </div>
          <div>
            <p style={{ textAlign: "left", marginTop: 50 }}>
              You can change the size of the avatar with the height and width
              CSS properties.
            </p>
          </div>
        </Container>
      </>
    );
  }
}

export default Profile;
