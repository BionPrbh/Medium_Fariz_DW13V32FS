import React, { Component } from 'react'
import './homestreammain.css'
import Link from '@material-ui/core/Link';

class HomeStreamMain extends Component {
  render() {
    return(
      <div>
        <div className="MainImage">
          <Link href={this.props.MainImageRoute}/>
        </div>
        <div className="MainArticle">
          <Link className="ArticleTop" underline="none" style={{color:"black"}} href={this.props.MainArticleRouteTop}><h3>{this.props.MainArticleTop}</h3></Link>
          <Link className="ArticleBottom" underline="none" style={{color:"gray"}} href={this.props.MainArticleRouteBottom}><p>{this.props.MainArticleBottom}</p></Link>
        </div>
        <div className="Hero">
          <Link className="Writer" underline="none" style={{color:"black"}} href={this.props.WriterRoute} >
            <p style={{marginTop:10,marginBottom:0}}> {this.props.Writer}</p>
          </Link>
          <p style={{marginTop:10,marginBottom:0, color:"black"}}>in</p>  
          <Link className="Publisher" underline="none" style={{color:"black"}} href={this.props.PublisherRoute} >
            <p style={{marginTop:10,marginBottom:0}}>{this.props.Publisher}</p>
          </Link>
        </div>
        <div className="ArticleDate">
          <p style={{marginTop:0, marginBottom:0, color:"gray"}}>{this.props.Date} | {this.props.TimeReading} Min Read</p>
        </div>
      </div>
    )
  }
}

export default HomeStreamMain