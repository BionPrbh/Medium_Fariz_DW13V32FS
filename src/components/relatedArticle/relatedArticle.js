import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

class Related extends Component {
  render() {
    return (
      <>
        <div
          style={{
            marginTop: 100,
            backgroundColor: " #f8f9f9  ",
            height: "100%",
            textAlign: "left"
          }}
        >
          <Container style={{ margin: "auto" }}>
            <Grid container xs sm md lg spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ color: "gray" }}>More from The Startup</p>
                <Card style={{ borderRadius: 0 }}>
                  <img
                    alt="/"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/358/1*gYFnqSQMGtaHG-R2x6B8zw.jpeg"
                  />
                </Card>
                <p
                  style={{
                    fontSize: 20,
                    fontFamily: "mono",
                    fontWeight: "100 bold"
                  }}
                >
                  How to Escape Competition (and Build a Business on Your Own
                  Terms)
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex"
                  }}
                >
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/44/44/0*gi1nFF9e2YRkEE9O.jpeg"
                  />
                  <p style={{ marginRight: 100 }}>
                    Ali Mese in The Startup
                    <br />
                    <small>Dec 2 · 9 min read 5.9K </small>
                  </p>
                  <i style={{}} class="far fa-bookmark"></i>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ color: "gray" }}>More from The Startup</p>
                <Card style={{ borderRadius: 0 }}>
                  <img
                    alt="/"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/358/1*gYFnqSQMGtaHG-R2x6B8zw.jpeg"
                  />
                </Card>
                <p
                  style={{
                    fontSize: 20,
                    fontFamily: "mono",
                    fontWeight: "100 bold"
                  }}
                >
                  How to Escape Competition (and Build a Business on Your Own
                  Terms)
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex"
                  }}
                >
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/44/44/0*gi1nFF9e2YRkEE9O.jpeg"
                  />
                  <p style={{ marginRight: 100 }}>
                    Ali Mese in The Startup
                    <br />
                    <small>Dec 2 · 9 min read 5.9K </small>
                  </p>
                  <i style={{}} class="far fa-bookmark"></i>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ color: "gray" }}>More from The Startup</p>
                <Card style={{ borderRadius: 0 }}>
                  <img
                    alt="/"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/358/1*gYFnqSQMGtaHG-R2x6B8zw.jpeg"
                  />
                </Card>
                <p
                  style={{
                    fontSize: 20,
                    fontFamily: "mono",
                    fontWeight: "100 bold"
                  }}
                >
                  How to Escape Competition (and Build a Business on Your Own
                  Terms)
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex"
                  }}
                >
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/44/44/0*gi1nFF9e2YRkEE9O.jpeg"
                  />
                  <p style={{ marginRight: 100 }}>
                    Ali Mese in The Startup
                    <br />
                    <small>Dec 2 · 9 min read 5.9K </small>
                  </p>
                  <i style={{}} class="far fa-bookmark"></i>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div
          style={{
            backgroundColor: "  #17202a   ",
            color: "white",
            height: "100%",
            textAlign: "left"
          }}
        >
          <Container style={{ margin: "auto" }}>
            <Grid container xs sm md lg spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ fontWeight: "bold" }}>More from The Startup</p>

                <p
                  style={{
                    fontSize: 20,

                    fontWeight: "100 bold"
                  }}
                >
                  Discover Medium Welcome to a place where words matter. On
                  Medium, smart voices and original ideas take center stage -
                  with no ads in sight. Watch
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ fontWeight: "bold" }}>More from The Startup</p>

                <p
                  style={{
                    fontSize: 20,

                    fontWeight: "100 bold"
                  }}
                >
                  Discover Medium Welcome to a place where words matter. On
                  Medium, smart voices and original ideas take center stage -
                  with no ads in sight. Watch
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p style={{ fontWeight: "bold" }}>More from The Startup</p>

                <p
                  style={{
                    fontSize: 20,

                    fontWeight: "100 bold"
                  }}
                >
                  Discover Medium Welcome to a place where words matter. On
                  Medium, smart voices and original ideas take center stage -
                  with no ads in sight. Watch
                </p>
              </Grid>
            </Grid>
            <hr style={{ border: "1px solid white" }} />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h1 style={{ fontFamily: "mono", fontWeight: "100 bold" }}>
                Medium
              </h1>
              <a
                
                style={{
                  marginLeft: "auto",
                  color: "gray",
                  textDecoration: "none"
                }}
                href="/"
              >
                About
              </a>
              <a
                style={{
                  color: "gray",
                  textDecoration: "none",
                  paddingLeft: 30
                }}
                href="/"
              >
                Help
              </a>
              <a
                style={{
                  color: "gray",
                  textDecoration: "none",
                  paddingLeft: 30
                }}
                href="/"
              >
                Legal
              </a>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default Related;
