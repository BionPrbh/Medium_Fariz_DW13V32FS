import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import { Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";

class Comment extends Component {
  render() {
    return (
      <>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Container>
            <Toolbar style={{ backgroundColor: "white" }}>
              <Typography
                variant="h6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "mono",
                  fontSize: "25px"
                }}
              >
                Medium
              </Typography>
              <Button
                color="inherit"
                style={{
                  color: "gray",
                  marginLeft: "auto"
                }}
              >
                <IconButton aria-label="search" color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton
                  aria-label="show 11 new notifications"
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
              </Button>
              <Button variant="outlined" size="small">
                Upgrade
              </Button>
              <IconButton aria-label="search" color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <div style={{ width: "60%", margin: "auto", marginTop: 50 }}>
          <Container>
            <p style={{ display: "flex", marginBottom: -40 }}>
              <strong>Showing responses for:</strong>
            </p>
            <Card
              style={{
                margin: "auto",
                marginTop: 50,
                marginBottom: 50,
                borderRadius: 0,
                textAlign: "left",
                padding: 10
              }}
            >
              <div
                style={{
                  lineHeight: 0.3,
                  padding: 20,
                  paddingBottom: 0,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <p>Healthcare Chatbots using Amazon Web Services</p>

                <i
                  class="fas fa-sign-language"
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    fontSize: 20,
                    marginRight: 10,
                    marginTop: -5,
                    marginLeft: "auto"
                  }}
                ></i>
                <p>2.4k</p>
                <i
                  class="fas fa-comment"
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    fontSize: 20,
                    marginRight: 10,
                    marginTop: -5,
                    marginLeft: 10
                  }}
                ></i>
                <p>68</p>
              </div>
              <div
                style={{
                  lineHeight: 0.3,
                  padding: 20,
                  paddingTop: 0,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <a href="/">Leith Akkawi 4</a>
              </div>
            </Card>
          </Container>
        </div>
        <div style={{ backgroundColor: " #f4f6f6", height: "100%" }}>
          {" "}
          <div
            style={{
              width: "60%",
              margin: "auto",
              marginTop: 50,
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Container>
              <p style={{ display: "flex", marginBottom: -40 }}>
                <strong>Responses</strong>
              </p>
              <Card
                style={{
                  margin: "auto",
                  marginTop: 50,
                  marginBottom: 50,
                  borderRadius: 0,
                  textAlign: "left",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Avatar
                  style={{ width: 70, height: 70, marginRight: 20 }}
                  alt="Remy Sharp"
                  src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
                />
                <TextField
                  id="standard-textarea"
                  label="your name"
                  placeholder="Write a response"
                  multiline
                  style={{ width: "100%" }}
                />
              </Card>
              <hr
                style={{
                  width: 100,
                  border: "1px solid black",
                  marginLeft: 0
                }}
              />
              <p style={{ textAlign: "left", marginLeft: 0 }}>
                Conversation between Tim Gray and Danny Forest.
              </p>
            </Container>
          </div>
          <div
            style={{
              width: "60%",
              margin: "auto",
              marginTop: 50,
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Container>
              <Card
                style={{
                  margin: "auto",
                  marginTop: -50,
                  marginBottom: 50,
                  borderRadius: 0,
                  textAlign: "left",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Grid>
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
                  />
                </Grid>

                <div
                  style={{
                    marginTop: 10,
                    lineHeight: 0
                  }}
                >
                  <p>Tim Gray</p>
                  <a href="/" style={{ marginTop: -10 }}>
                    Nov 7, 2018
                  </a>{" "}
                </div>
              </Card>
              <Card style={{ marginTop: -50 }}>
                <p
                  style={{
                    fontFamily: "mono",
                    fontSize: 20,
                    color: " gray",
                    textAlign: "left",
                    padding: 20
                  }}
                >
                  &emsp;If I were to add a ninth, it would be to learn about and
                  recognize in yourself and others the so called cognitive
                  biases. I would say this ranks number 2 behind learning to
                  learn, as it has a significant underpinning to the other 7.
                </p>
                <i
                  class="fas fa-sign-language"
                  style={{
                    fontSize: 30,
                    marginTop: -5,
                    padding: "4%",
                    display: "flex"
                  }}
                ></i>
              </Card>
              <Card
                style={{
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 50,
                  borderRadius: 0,
                  textAlign: "left",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Grid>
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
                  />
                </Grid>

                <div
                  style={{
                    marginTop: 10,
                    lineHeight: 0
                  }}
                >
                  <p>Tim Gray</p>
                  <a href="/" style={{ marginTop: -10 }}>
                    Nov 7, 2018
                  </a>{" "}
                </div>
              </Card>
              <Card style={{ marginTop: -50 }}>
                <p
                  style={{
                    fontFamily: "mono",
                    fontSize: 20,
                    color: " gray",
                    textAlign: "left",
                    padding: 20
                  }}
                >
                  &emsp;If I were to add a ninth, it would be to learn about and
                  recognize in yourself and others the so called cognitive
                  biases. I would say this ranks number 2 behind learning to
                  learn, as it has a significant underpinning to the other 7.
                </p>
                <i
                  class="fas fa-sign-language"
                  style={{
                    fontSize: 30,
                    marginTop: -5,
                    padding: "4%",
                    display: "flex"
                  }}
                ></i>
              </Card>
              <Card
                style={{
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 50,
                  borderRadius: 0,
                  textAlign: "left",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Grid>
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
                  />
                </Grid>

                <div
                  style={{
                    marginTop: 10,
                    lineHeight: 0
                  }}
                >
                  <p>Tim Gray</p>
                  <a href="/" style={{ marginTop: -10 }}>
                    Nov 7, 2018
                  </a>{" "}
                </div>
              </Card>
              <Card style={{ marginTop: -50 }}>
                <p
                  style={{
                    fontFamily: "mono",
                    fontSize: 20,
                    color: " gray",
                    textAlign: "left",
                    padding: 20
                  }}
                >
                  &emsp;If I were to add a ninth, it would be to learn about and
                  recognize in yourself and others the so called cognitive
                  biases. I would say this ranks number 2 behind learning to
                  learn, as it has a significant underpinning to the other 7.
                </p>
                <i
                  class="fas fa-sign-language"
                  style={{
                    fontSize: 30,
                    marginTop: -5,
                    padding: "4%",
                    display: "flex"
                  }}
                ></i>
              </Card>
              <Card
                style={{
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 50,
                  borderRadius: 0,
                  textAlign: "left",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Grid>
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
                  />
                </Grid>

                <div
                  style={{
                    marginTop: 10,
                    lineHeight: 0
                  }}
                >
                  <p>Tim Gray</p>
                  <a href="/" style={{ marginTop: -10 }}>
                    Nov 7, 2018
                  </a>{" "}
                </div>
              </Card>
              <Card style={{ marginTop: -50 }}>
                <p
                  style={{
                    fontFamily: "mono",
                    fontSize: 20,
                    color: " gray",
                    textAlign: "left",
                    padding: 20
                  }}
                >
                  &emsp;If I were to add a ninth, it would be to learn about and
                  recognize in yourself and others the so called cognitive
                  biases. I would say this ranks number 2 behind learning to
                  learn, as it has a significant underpinning to the other 7.
                </p>
                <i
                  class="fas fa-sign-language"
                  style={{
                    fontSize: 30,
                    marginTop: -5,
                    padding: "4%",
                    display: "flex"
                  }}
                ></i>
              </Card>
              <Card
                style={{
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 50,
                  borderRadius: 0,
                  textAlign: "left",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Grid>
                  <Avatar
                    style={{ marginRight: 20 }}
                    alt="Remy Sharp"
                    src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
                  />
                </Grid>

                <div
                  style={{
                    marginTop: 10,
                    lineHeight: 0
                  }}
                >
                  <p>Tim Gray</p>
                  <a href="/" style={{ marginTop: -10 }}>
                    Nov 7, 2018
                  </a>{" "}
                </div>
              </Card>
              <Card style={{ marginTop: -50 }}>
                <p
                  style={{
                    fontFamily: "mono",
                    fontSize: 20,
                    color: " gray",
                    textAlign: "left",
                    padding: 20
                  }}
                >
                  &emsp;If I were to add a ninth, it would be to learn about and
                  recognize in yourself and others the so called cognitive
                  biases. I would say this ranks number 2 behind learning to
                  learn, as it has a significant underpinning to the other 7.
                </p>
                <i
                  class="fas fa-sign-language"
                  style={{
                    fontSize: 30,
                    marginTop: -5,
                    padding: "4%",
                    display: "flex"
                  }}
                ></i>
              </Card>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
export default Comment;
