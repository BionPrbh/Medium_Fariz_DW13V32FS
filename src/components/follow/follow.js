import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../auth/auth.css"
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const tombol = [
  {
    nama: "Books"
  },
  {
    nama: "Self Improvement"
  },
  {
    nama: "Productivity"
  },
  {
    nama: "Life"
  },
  {
    nama: "Life Lessons"
  }
];

class Follow extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={0} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "left" }}>
            {tombol.map(tom => (
              <Button
                variant="contained"
                style={{
                  marginRight: 5,
                  color: "gray",
                  border: 0,
                  boxShadow: "0 0 0 0",
                  fontSize: 15,
                  paddingLeft: 1,
                  paddingRight: 1,
                  borderRadius: 2,
                  height: 25,
                  textTransform: "lowercase"
                }}
              >
                {tom.nama}
              </Button>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} lg={6} style={{ display: "flex" }}>
            <i
              class="fas fa-sign-language"
              style={{
                marginTop: 20,
                border: "1px solid green",
                padding: "2%",
                fontSize: 50,
                borderRadius: "100%",
                color: "green"
              }}
            ></i>
            <div
              style={{
                marginTop: 60,
                display: "flex",
                flexDirection: "column",
                lineHeight: "1px",
                textAlign: "left",
                marginLeft: 20
              }}
            >
              <p>98K claps</p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                letterSpacing: 10,
                marginRight: 20,
                marginTop: 60,
                fontSize: 30
              }}
            >
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="far fa-bookmark"></i>
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{ justifyContent: "center" }}>
          <Grid item xs={10} sm={6} lg={6} style={{ textAlign: "left" }}>
            <hr />

            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                marginBottom: 20
              }}
            >
              <Avatar
                style={{ width: 100, height: 100 }}
                alt="Remy Sharp"
                src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
              />
              <div
                style={{
                  marginLeft: 25,
                  marginTop: 10,
                  width: "50%",
                  marginRight: 150
                }}
              >
                <p style={{ color: "gray", lineHeight: 0 }}>Written by</p>
                <h3 style={{ fontWeight: "bold" }}>Ryan Holiday</h3>
                <p style={{ color: "gray" }}>
                  Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The
                  Obstacle Is The Way’ http://amzn.to/24qKRWR
                </p>
              </div>
              <Button
                size="small"
                variant="outlined"
                style={{
                  height: "100%",
                  color: "green",
                  border: "1 solid green",
                  margin: "auto"
                }}
              >
                follow
              </Button>
            </div>
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                marginBottom: 20
              }}
            >
              <Avatar
                style={{ width: 100, height: 100 }}
                alt="Remy Sharp"
                src="https://miro.medium.com/fit/c/87/87/1*e0pwWB5JECmbmBOAtikNlQ.jpeg"
              />
              <div
                style={{
                  marginLeft: 25,
                  marginTop: 10,
                  width: "50%",
                  marginRight: 150
                }}
              >
                <p style={{ color: "gray", lineHeight: 0 }}>Written by</p>
                <h3 style={{ fontWeight: "bold" }}>Ryan Holiday</h3>
                <p style={{ color: "gray" }}>
                  Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The
                  Obstacle Is The Way’ http://amzn.to/24qKRWR
                </p>
              </div>
              <Button
                size="small"
                variant="outlined"
                style={{
                  height: "100%",
                  color: "green",
                  border: "1 solid green",
                  margin: "auto"
                }}
              >
                follow
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "left" }}>
            <hr />
            <Button
              size="large"
              variant="outlined"
              style={{
                width: "100%",
                height: 50,
                color: "green",
                border: "1px solid green",
                margin: "auto",
                textTransform: "none"
              }}
            >
              See responses (328)
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Follow;
