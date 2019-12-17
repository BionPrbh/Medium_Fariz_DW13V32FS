import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Related from "../../components/relatedArticle/relatedArticle";
import Follow from "../../components/follow/follow";
import NavbarArticle from "../../components/articleNavbar/articleNavbar";

class Article extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <NavbarArticle />
        </Container>
        <Container maxWidth="md">
          <Card style={{ boxShadow: "0 0 0 0" }}>
            <img
              style={{ width: "100%", borderRadius: 0, marginTop: 50 }}
              alt="Remy Sharp"
              src="https://miro.medium.com/max/2182/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"
            />
          </Card>
        </Container>{" "}
        <Container maxWidth="sm">
          <a href="/"> Books</a>
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontFamily: "Serif" }}>
              If You Only Read A Few Books In 2018, Read These
            </h1>
          </div>
          <div>
            <Box display="flex" flexDirection="row" p={1} m={1}>
              <Box p={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png"
                />
              </Box>
              <Box p={1}>
                <a href="/">Ryan Holiday</a>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ height: 25, fontSize: 12, marginLeft: 20 }}
                >
                  Default
                </Button>
                <p style={{ fontSize: 12, textAlign: "left" }}>
                  Jun 26, 2018 · 10 min read
                </p>
              </Box>
              <Box
                display="flex"
                flexDirection="row-reverse"
                p={0}
                m={5}
                r={10}
                style={{ marginLeft: "auto" }}
              >
                <i style={{ marginLeft: 10 }} class="far fa-bookmark fa-lg"></i>
                <i
                  style={{ marginLeft: 10 }}
                  class="fab fa-facebook-square fa-lg"
                ></i>
                <i class="fab fa-twitter fa-lg"></i>
              </Box>
            </Box>
          </div>
          <div style={{ textAlign: "left" }}>
            <p>
              If you’d liked to be jerked around less, provoked less, and more
              productive and inwardly focused, where should you start?
            </p>
          </div>
          <div style={{ textAlign: "left" }}>
            <p>
              To me, the answer is obvious: by turning to wisdom. Below is a
              list of 21 books that will help lead you to a better, stronger
              2018.
            </p>
          </div>
          <div style={{ textAlign: "left", margin: 0 }}>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                marginBottom: -5
              }}
            >
              Deep Work: Rules for Focused Success in a Distracted World by Cal
            </p>
            <p>
              {" "}
              <strong>Newport</strong> Media consumption went way up in 2017.
              For most of us, that meant happiness and productivity went way
              down. The world is becoming noisier and will become more so every
              day. If you can’t cultivate the ability to have quiet, insightful,
              deeply focused periods of productive work, you’re going to get
              screwed. This is a book that explains how to cultivate and protect
              that skill — the ability to do deep work. I strongly urge you to
              begin this practice in 2018— if you want to get anything done or
              perform your best.
            </p>
          </div>
          <div style={{ textAlign: "left", margin: 0 }}>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                marginBottom: -5
              }}
            >
              Deep Work: Rules for Focused Success in a Distracted World by Cal
            </p>
            <p>
              {" "}
              <strong>Living a Good Life by Mark Manson To me,</strong>
              practical philosophy has always been the art knowing what to — and
              what not to — give a fuck about. That’s what Mark’s book is about.
              It’s not about apathy. It’s about cultivating indifference to
              things that don’t matter. Be careful, as Marcus Aurelius warns,
              not to give the little things more time and thought they deserved.
              Maybe looking back at this year reveals how much effort you’ve
              frittered away worrying about the trivial. If so, let 2018 be a
              year that you only devote energy to things that truly matter — get
              the important things right by ignoring the insignificant.
            </p>
          </div>
          <div style={{ textAlign: "left", margin: 0 }}>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                marginBottom: -5
              }}
            >
              Deep Work: Rules for Focused Success in a Distracted World by Cal
            </p>
            <p>
              {" "}
              <strong>Living a Good Life by Mark Manson To me,</strong>
              practical philosophy has always been the art knowing what to — and
              what not to — give a fuck about. That’s what Mark’s book is about.
              It’s not about apathy. It’s about cultivating indifference to
              things that don’t matter. Be careful, as Marcus Aurelius warns,
              not to give the little things more time and thought they deserved.
              Maybe looking back at this year reveals how much effort you’ve
              frittered away worrying about the trivial. If so, let 2018 be a
              year that you only devote energy to things that truly matter — get
              the important things right by ignoring the insignificant.
            </p>
          </div>
        </Container>
        <Follow />
        <Related />
      </div>
    );
  }
}
export default Article;
