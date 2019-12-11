import React, { Component } from 'react'
import './home.css'
import HomeButton from '../header/header'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeStreamMain from '../homestream/homestreammain'
import HomeStreamFeeder from '../homestream/homestreamfeeder'
import HomeStreamSide from '../homestream/homestreamside'
import Grid from '@material-ui/core/Grid'
import StreamCard from '../streamcard/streamcard'
import Mainfeed from '../mainfeed/mainfeed'
import Navbar from '../category/category'

class Home extends Component {
    render() {
        return(
            <div>
              {/* header section */}
              <Container maxWidth="lg" className="HomeHeader">
                <div className="HomeNavigator">
                  <HomeButton 
                    Title="Medium"
                    Icons="true"
                  />
                </div>
                <div className="Icons">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                  <IconButton>
                    <BookmarksOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <NotificationsOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <Avatar alt="/" src="https://cdn-images-1.medium.com/fit/c/32/32/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg" />
                  </IconButton>
                </div>
              </Container>

              {/* nav section */}
              <Navbar />

              {/* content section */}
              <div className="ContentHomeStream">
                <Container className="ContentHomeStreamContainer">
                  <div className="TopStreamLeft">
                    <HomeStreamMain 
                      MainImageRoute="/"
                      MainArticleTop="Late-Afternoon Munchies? Blame Your Brain"
                      MainArticleBottom="Heavy thinking burns calories — go ahead, give your brain that bag of chips"
                      Writer="Ashley Laderer"
                      WriterRoute=""
                      Publisher="Elemental"
                      PublisherRoute=""
                      Date="Dec 9"
                      TimeReading="4"
                    />
                  </div>
                  <div className="TopStreamMiddle">
                    <div style={{ marginBottom:25 }}>
                      <HomeStreamFeeder 
                        FeederUrl="/"
                        FeederImage="https://cdn-images-1.medium.com/fit/c/100/100/1*YAaAjBYEDVI7ynN588t8fg.jpeg"
                        FeederTitle="Technological Books you should read in 2020"
                        FeederWriter="Przemek Chojecki in Towards Data Science"
                        FeederDate="Dec 9"
                        FeederTimeReading="4"
                        
                      />
                    </div>
                    <div style={{ marginBottom:25 }}>
                      <HomeStreamFeeder 
                        FeederUrl="/"
                        FeederImage="https://cdn-images-1.medium.com/fit/c/100/100/0*gmGGxSWqJy4jaepF"
                        FeederTitle="The Ultimate Communication Skill: Learning When to Keep Quiet"
                        FeederWriter="Michael Thompson in Personal Growth"
                        FeederDate="Nov 18"
                        FeederTimeReading="5"
                      />
                    </div>
                    <div>
                      <HomeStreamFeeder 
                        FeederUrl="/"
                        FeederImage="https://cdn-images-1.medium.com/fit/c/100/100/1*5IwI3UFT8BmTwyY9k_vcbg.jpeg"
                        FeederTitle="How to Start Using .map() .filter() and .reduce()"
                        FeederWriter="Jonathan Hsu in Better Programming"
                        FeederDate="Dec 9"
                        FeederTimeReading="4"
                      />
                    </div>
                  </div>
                  <div className="TopStreamRight">
                    <HomeStreamSide 
                      SideUrl="/"
                      SideImage="https://cdn-images-1.medium.com/fit/c/504/222/0*tZ2NcZr2jrXjhQvv"
                      SideTitle="What Does a Psychopath Do When They Are Found Out?"
                      SideDescription="Here’s What You Can Expect To See."
                      SideWriter="Samantha Clarke in We Are Warriors"
                      SideDate="Nov 25"
                      SideTimeReading="7"
                    />
                  </div>
                </Container>
                <Container style={{display:'flex'}}>
                  <Grid container style={{display:'flex', justifyContent:'flex-end', marginRight:110}}>
                    <a href="/" style={{textDecoration:'none',marginTop:4,fontSize:13, color: '#03a87c'}}>
                      SEE ALL FEATURED
                    </a>
                    <Icon style={{color:"#03a87c"}}>
                      <ChevronRightIcon />
                    </Icon>
                  </Grid>
                </Container>
                <div style={{borderBottom:"1px solid rgba(0,0,0,.15)", maxWidth: 1032,margin:"auto",paddingTop:20}}>

                </div>
              </div>
              <Grid className="ForeGround" style={{minHeight:"100vh",}}>
                <Grid container style={{maxWidth:"100vh", width:"100%", margin:"0 auto",marginTop:48}}>
                  <Grid item xs={8}  className="GroundLeft" style={{height:"100vh",paddingRight:24}}>
                    <Mainfeed 
                      MainFeedUrl=""
                      Category="POPULAR ON MEDIUM"
                      Title="Startup Books you should read in 2020"
                      Description="How to grow a start-up? Read daily!"
                      Writer="Przemek Chojecki"
                      Publisher="Towards Data Science"
                      Date="Nov 20"
                      Minute="4 min read"
                      MainFeedImage="https://cdn-images-1.medium.com/fit/c/152/156/1*Jg1oYMG_dN2MxbBzlgo0Xg.jpeg"
                    />
                    <Mainfeed 
                      Category="POPULAR ON MEDIUM"
                      Title="10 Tips and Tricks That Will Make You a Better ReactJS Dev"
                      Description="This will help you becoming better React devs, write better code or excel at coding interviews"
                      Writer="Simon Holdorf"
                      Publisher="Better Programming"
                      Date="Nov 21"
                      Minute="8 min read"
                      MainFeedImage="https://cdn-images-1.medium.com/fit/c/152/156/1*-U4maCVfQf5Du120SDuqSw.jpeg"
                    />
                    <Mainfeed 
                      Category="FITNESS"
                      Title="On Quitting in the Middle of a Marathon"
                      Description="What does it mean to keep doing something when you no longer want to?"
                      Writer="Sarah Menkedick"
                      Publisher="Gay Mag"
                      Date="Dec 11"
                      Minute="13 min read"
                      MainFeedImage="https://cdn-images-1.medium.com/focal/152/156/50/45/1*EzS1MwkKkSZNqx5jX27d3A.gif"
                    />
                    <Mainfeed 
                      Category="POPULAR ON MEDIUM"
                      Title="Fantastic Programming Project Ideas and Where to Find Them (Beginner-Friendly)"
                      Description="20 cool project ideas for data science, machine-learning app development, and web development"
                      Writer="Nityesh Agarwal"
                      Publisher="Better Programming"
                      Date="Nov 28"
                      Minute="12 min read"
                      MainFeedImage="https://cdn-images-1.medium.com/fit/c/152/156/1*-59NNutOhc5iDRIGJioxIQ.jpeg"
                    />
                    <Mainfeed 
                      Category="POPULAR ON MEDIUM"
                      Title="https://cdn-images-1.medium.com/fit/c/152/156/1*Vqh0ZoxEm1ge3XlpslFYCQ.jpeg"
                      Description="10 Of The Most Awesome MacOS Catalina Features"
                      Writer="Erik-Jan van Baaren MSc"
                      Publisher="Tech Explained"
                      Date="Nov 21"
                      Minute="6 min read"
                      MainFeedImage="https://cdn-images-1.medium.com/fit/c/152/156/1*AK6CMKn0SFzgi7Safk55dg.png"
                    />
                    <Mainfeed 
                      Category="POPULAR ON MEDIUM"
                      Title="Must-Have Weapons In Your React Armory"
                      Description="Weapons(tools) make a soldier(developer) effective. Advanced & effective weapons(tools) in your armory will make sure, you have the right…"
                      Writer="Erik-Jan van Baaren MSc"
                      Publisher="Tech Explained"
                      Date="Nov 21"
                      Minute="6 min read"
                      MainFeedImage="https://cdn-images-1.medium.com/fit/c/152/156/1*Vqh0ZoxEm1ge3XlpslFYCQ.jpeg"
                    />

                  </Grid>
                  <Grid item xs={4} className="GroundRight" style={{height:"100vh"}}>
                    <StreamCard />
                    <Grid className="GroundPopular">

                    </Grid>
                    <Grid className="GroundReading">
                      <StreamCard 
                      
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
        ) 
    }
}

export default Home