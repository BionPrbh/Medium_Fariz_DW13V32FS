import React from 'react'
import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import FollowButton from '../../components/input/button/followButton'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import CPHTLast from '../../components/cphighlights/cphighlightstextlast'
import CPHTFirst from '../../components/cphighlights/cphighlightstextfirst'
import CPHQuote from '../../components/cphighlights/cphquote'
import CPFeed from '../../components/cpcontent/cpcontent'


export default function categoryPage() {
  return(
    <Grid container>
      <Grid container sm={12} className="cp-header" style={{height:70, boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px",}}>
        <Grid container sm={12} style={{margin:"0px 350px",display:"flex", justifyContent:"space-between"}}>
            <CardMedia
              component="img"
              image="https://miro.medium.com/max/195/1*emiGsBgJu2KHWyjluhKXQw.png"
              height="35"
              style={{width:35,paddingTop:17}}
            />
            <div>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <BookmarksOutlinedIcon />
              </IconButton>
              <IconButton>
                <NotificationsNoneOutlinedIcon />
              </IconButton>
              <IconButton>
                <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/64/64/1*2esmZ2ycbaXZK5rw4fHR0A.jpeg"/>
              </IconButton> 
            </div>
        </Grid>
      </Grid>
      <Grid container sm={12} className="cp-title" style={{marginRight:350,marginLeft:350,marginTop:77, marginBottom:77}}>
        <Grid item sm={3} style={{backgroundColor:"transparent"}}>
          <CardMedia 
            component="img"
            image="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png"
            style={{width:270}}
          />
        </Grid>
        <Grid item sm={6} style={{backgroundColor:"transparent"}}>
          <p style={{fontSize:20, marginTop:0, marginBottom:0, paddingTop:13, paddingRight:50, fontFamily:"medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"}}>
            <a href="/" style={{textDecoration:"none"}}>The front lines of the future.</a>
            A Medium publication about tech and science.
          </p>
        </Grid>
        <Grid item sm={3} style={{backgroundColor:"transparent", paddingTop:19, paddingLeft:190}}>
          <FollowButton />
        </Grid>
      </Grid>
      <Grid container sm={12} className="cp-highlight" style={{marginRight:350,marginLeft:350}}>
        <CPHTLast
          CPHimage="https://miro.medium.com/max/1512/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"
          CPHBGColor="rgb(106, 11, 255)"
          ArticleFontColor="white"
          CPHimageHeight="354"
          CPHTitle="Uber Delivery Workers Track Thieves Through a Secret Network"
          CPHDescription="A 1,000-person WhatsApp community keeps delivery workers safe"
          CPHWriter="Martha Pskowski"
          WriterFontColor="rgb(218, 248, 50)"
          CPHDate="Dec 11"
          CPHReadingTime="9 min read"
        />
        <CPHTFirst 
          CPHimage="https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
          CPHBGColor="white"
          ArticleFontColor="black"
          CPHimageHeight="354"
          CPHTitle="The Influencer and the Hit Man"
          CPHDescription="How a years-long domain name feud ended in a bloody shootout"
          CPHWriter="Ian Frisch"
          WriterFontColor="rgb(106, 11, 255)"
          CPHDate="Dec 10"
          CPHReadingTime="24 min read"
        />
        <CPHQuote 
          quoteBgColor="yellow"
          quoteTitle="There’s no need for Twitter to serve as a tool of political omnipresence."
          quoteWriter="Robert Howell"
          quoteBrief="The Case for Removing All Politicians From Twitter"
          quoteDate="Dec 11"
          ReadingTime="5 min read"
        />
        <CPHTLast
          CPHimage="https://miro.medium.com/max/1512/1*-8KL6r_tNZ9B2Lfz_9dc0Q.png"
          CPHBGColor="rgb(106, 11, 255)"
          ArticleFontColor="white"
          CPHimageHeight="354"
          CPHTitle="A New Smart Contact Lens Charges Without Burning Your Eyes"
          CPHDescription="The technology uses supercapacitors and will help speed the creation of contacts lenses that monitor the body"
          CPHWriter="Yasmin Tayag"
          WriterFontColor="rgb(218, 248, 50)"
          CPHDate="Dec 11"
          CPHReadingTime="3 min read"
        />
      </Grid>
      <Grid className="cp-content">
            <hr style={{width:700, color:"rgb(106, 11, 255)"}}/>
        <Grid container sm={12} className="cp-cintro" style={{ width:1408, height:840, marginTop:25, marginLeft:700}}>
          <Grid item sm={6} >
            <Grid item sm={12}>
              <CardMedia 
                component="img"
                image="https://miro.medium.com/max/1512/1*udff9dYRAu0vc2yL7-AuQg.jpeg"
                height="456"
              />
            </Grid>
            <Grid item sm={12} style={{marginTop:20}}>
              <p style={{fontSize:34, fontWeight:500, color:"black"}}>Keep Your Home Screen Organized</p>
              <p style={{fontSize:21, fontWeight:400, color:"black"}}>Designer Hideaki Nakatani makes a variety of unconventional wallpapers that expand the capabilities of iOS. (Sorry, Android users.) The “Expand Bezel” options give you appealing app shelves to organize your home screen with; the “Hide Dock” wallpapers, well, hide the default shading behind your app dock, allowing colors and gradients to spill all the way to the bottom of your screen.</p>
              <p style={{fontSize:21, fontWeight:400, color:"black"}}> Visit Nakatani’s <a href="/">“Mysterious iPhone Wallpaper” website</a> to explore the options for yourself. And come back to OneZero for more tips like this every day.</p>
            </Grid>
          </Grid>
        </Grid>
          <hr style={{width:700, color:"rgb(106, 11, 255)"}}/>
        <Grid container className="cp-cfeed" style={{ width:1408, height:840, marginTop:25}}>
          <Grid container>
            <Grid item sm={8}style={{marginLeft:700}}>
              <CPFeed 
                Title="‘I Felt Like a Time Traveler’: 6 Months Without the Internet"
                Description="The artist Nastja Säde Rönkkö talks about what life was like when she utterly disconnected from the online world for half a year"
                Writer="Thomas Mcmullan"
                Date="Dec 1"
                ReadingTime="5 min read"
                CPFeedImage="https://miro.medium.com/max/756/1*csm12WLUqj53wH7gajw8Rg.jpeg"
              />
              <CPFeed 
                Title="If It’s OK to Fantasize About Someone You Know, Why Not in VR?"
                Description="Erotic deepfakes are only going to make the question of sexual ethics muddier and more confusing"
                Writer="Lux Alptraum"
                Date="Dec 11"
                ReadingTime="7 min read"
                CPFeedImage="https://miro.medium.com/max/756/1*Tc40NLUUtVafKwrl28VBrQ.jpeg"
              />
              <CPFeed 
                Title="An Eerie Historical Deepfake Imagines Nixon Telling the World the Moon Landing Failed"
                Description="A team of scientists created a convincing facsimile of a speech that never happened, and put the threat of fake information front and…"
                Writer="Andrew Dickson"
                Date="Dec 10"
                ReadingTime="6 min read"
                CPFeedImage="https://miro.medium.com/max/756/1*tQiOwR6B5nBiyNoyMG__mQ.png"
              />
              <CPFeed 
                Title="A Googler Explains Exactly How the Pixel 4 Captures the Night Sky"
                Description="We went stargazing with project manager Alex Schiffhauer to learn more about the new phone’s astrophotography mode"
                Writer="Aaron Gell"
                Date="Dec 10"
                ReadingTime="13 min read"
                CPFeedImage="https://miro.medium.com/max/756/1*MDxT8MJL3DmelDMv3-gd9A.gif"
              />
              <CPFeed 
                Title="Mood-Altering Wearables Are Silicon Valley’s Newest Delusion"
                Description="New devices tap into the age-old promises of mood alteration"
                Writer="Aimee Pearcy"
                Date="Dec 9"
                ReadingTime="5 min read"
                CPFeedImage="https://miro.medium.com/max/756/0*LG1uUR7TbMplW8xf"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}